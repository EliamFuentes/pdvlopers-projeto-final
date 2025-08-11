const express = require("express")
const router = express.Router()

// Placeholder para rotas financeiras (Back 5 - Helen)
/**
 * @swagger
 * tags:
 *   name: Financial
 *   description: Controle financeiro
 */

router.get("/transactions", (req, res) => {
  res.json({ message: "Listar transações - implementar (Helen)" })
})

router.post("/transactions", (req, res) => {
  res.json({ message: "Criar transação - implementar (Helen)" })
})

router.get("/reports/monthly", (req, res) => {
  res.json({ message: "Relatório mensal - implementar (Helen)" })
})

router.get("/reports/charts", (req, res) => {
  res.json({ message: "Dados para gráficos - implementar (Helen)" })
})

router.get("/summary", (req, res) => {
  res.json({ message: "Resumo financeiro - implementar (Helen)" })
})

module.exports = router
