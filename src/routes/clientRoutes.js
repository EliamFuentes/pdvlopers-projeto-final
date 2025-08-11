const express = require("express")
const router = express.Router()

// Placeholder para rotas de clientes (Back 2 - Fabio N.)
/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: Gerenciamento de clientes
 */

router.get("/", (req, res) => {
  res.json({ message: "Listar clientes - implementar (Fabio N.)" })
})

router.post("/", (req, res) => {
  res.json({ message: "Criar cliente - implementar (Fabio N.)" })
})

router.get("/:id", (req, res) => {
  res.json({ message: "Buscar cliente por ID - implementar (Fabio N.)" })
})

router.put("/:id", (req, res) => {
  res.json({ message: "Atualizar cliente - implementar (Fabio N.)" })
})

router.delete("/:id", (req, res) => {
  res.json({ message: "Deletar cliente - implementar (Fabio N.)" })
})

router.get("/cpf/:cpf", (req, res) => {
  res.json({ message: "Buscar cliente por CPF - implementar (Fabio N.)" })
})

module.exports = router
