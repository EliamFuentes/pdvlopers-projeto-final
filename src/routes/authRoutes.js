const express = require("express")
const router = express.Router()

// Placeholder para rotas de autenticação (Back 1 - Geraldo)
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Gerenciamento de autenticação e segurança
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registrar novo usuário
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - name
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
router.post("/register", (req, res) => {
  res.json({ message: "Rota de registro - implementar (Geraldo)" })
})

router.post("/login", (req, res) => {
  res.json({ message: "Rota de login - implementar (Geraldo)" })
})

router.post("/forgot-password", (req, res) => {
  res.json({ message: "Rota de recuperação de senha - implementar (Geraldo)" })
})

router.post("/2fa/setup", (req, res) => {
  res.json({ message: "Rota de setup 2FA - implementar (Geraldo)" })
})

module.exports = router
