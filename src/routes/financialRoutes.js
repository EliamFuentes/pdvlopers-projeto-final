// src/routes/financialRoutes.js
const express = require("express");
const router = express.Router();

// carrega controllers ESM só quando necessários
async function loadControllers() {
    const tx = await import("../controllers/TransactionController.js");
    const rep = await import("../controllers/ReportController.js");
  return {
    createTransaction: tx.createTransaction,
    getTransactions: tx.getTransactions,
    updateTransaction: tx.updateTransaction,
    deleteTransaction: tx.deleteTransaction,
    getSummary: rep.getSummary,
    getSummaryByCategory: rep.getSummaryByCategory,
  };
}

// CRUD
router.post("/transactions", async (req, res, next) => {
  try {
    const { createTransaction } = await loadControllers();
    return createTransaction(req, res, next);
  } catch (e) { next(e); }
});

router.get("/transactions", async (req, res, next) => {
  try {
    const { getTransactions } = await loadControllers();
    return getTransactions(req, res, next);
  } catch (e) { next(e); }
});

router.put("/transactions/:id", async (req, res, next) => {
  try {
    const { updateTransaction } = await loadControllers();
    return updateTransaction(req, res, next);
  } catch (e) { next(e); }
});

router.delete("/transactions/:id", async (req, res, next) => {
  try {
    const { deleteTransaction } = await loadControllers();
    return deleteTransaction(req, res, next);
  } catch (e) { next(e); }
});

// Relatórios
router.get("/summary", async (req, res, next) => {
  try {
    const { getSummary } = await loadControllers();
    return getSummary(req, res, next);
  } catch (e) { next(e); }
});

router.get("/summary/by-category", async (req, res, next) => {
  try {
    const { getSummaryByCategory } = await loadControllers();
    return getSummaryByCategory(req, res, next);
  } catch (e) { next(e); }
});

module.exports = router;
