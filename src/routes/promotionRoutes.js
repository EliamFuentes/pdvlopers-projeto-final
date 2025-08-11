const express = require("express")
const router = express.Router()

// Placeholder para rotas de promoções (Back 4 - João Jacques)
/**
 * @swagger
 * tags:
 *   name: Promotions
 *   description: Gerenciamento de promoções e comunicação
 */

router.get("/", (req, res) => {
  res.json({ message: "Listar promoções - implementar (João Jacques)" })
})

router.post("/", (req, res) => {
  res.json({ message: "Criar promoção - implementar (João Jacques)" })
})

router.post("/send-email", (req, res) => {
  res.json({ message: "Enviar email promocional - implementar (João Jacques)" })
})

router.post("/send-whatsapp", (req, res) => {
  res.json({ message: "Enviar WhatsApp - implementar (João Jacques)" })
})

router.get("/segments", (req, res) => {
  res.json({ message: "Listar segmentos de clientes - implementar (João Jacques)" })
})

module.exports = router
