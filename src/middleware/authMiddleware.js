const jwt = require("jsonwebtoken")
const supabase = require("../config/database")

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
      return res.status(401).json({
        error: "Token de acesso requerido",
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Verificar se o usuário ainda existe no banco
    const { data: user, error } = await supabase
      .from("users")
      .select("id, email, role, active")
      .eq("id", decoded.userId)
      .single()

    if (error || !user || !user.active) {
      return res.status(401).json({
        error: "Token inválido ou usuário inativo",
      })
    }

    req.user = user
    next()
  } catch (error) {
    return res.status(403).json({
      error: "Token inválido",
    })
  }
}

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        error: "Usuário não autenticado",
      })
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        error: "Acesso negado",
      })
    }

    next()
  }
}

module.exports = {
  authenticateToken,
  authorize,
}
