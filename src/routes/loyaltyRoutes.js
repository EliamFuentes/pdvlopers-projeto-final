const express = require("express")
const router = express.Router()

// Placeholder para rotas de fidelidade (Back 3 - Felipe F.)
/**
 * @swagger
 * tags:
 *   name: Loyalty
 *   description: Sistema de fidelidade e pontos
 */

router.get("/points/:clientId", (req, res) => {
  res.json({ message: "Buscar pontos do cliente - implementar (Felipe F.)" })
})

router.post("/points/add", (req, res) => {
  res.json({ message: "Adicionar pontos - implementar (Felipe F.)" })
})

router.post("/points/redeem", (req, res) => {
  res.json({ message: "Resgatar pontos - implementar (Felipe F.)" })
})

router.get("/rewards", (req, res) => {
  res.json({ message: "Listar brindes - implementar (Felipe F.)" })
})

router.post("/rewards", (req, res) => {
  res.json({ message: "Criar brinde - implementar (Felipe F.)" })
})

router.get("/history/:clientId", (req, res) => {
  res.json({ message: "Histórico de pontos - implementar (Felipe F.)" })
})

module.exports = router
