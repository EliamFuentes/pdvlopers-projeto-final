import express from "express";

import {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
} from "../controllers/TransactionController.js";
import { getSummary, getSummaryByCategory } from "../controllers/ReportController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Financial
 *   description: Gestao de transacoes financeiras e relatorios analiticos
 */

/**
 * @swagger
 * /api/financial/transactions:
 *   post:
 *     summary: Criar transacao financeira
 *     tags: [Financial]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *               - amount
 *               - type
 *               - transaction_date
 *             properties:
 *               description:
 *                 type: string
 *                 example: Venda de produto
 *               amount:
 *                 type: number
 *                 format: float
 *                 example: 150.75
 *               type:
 *                 type: string
 *                 enum: [credit, debit]
 *                 example: credit
 *               transaction_date:
 *                 type: string
 *                 format: date
 *                 example: 2025-01-31
 *               category_id:
 *                 type: integer
 *                 nullable: true
 *                 example: 3
 *     responses:
 *       201:
 *         description: Transacao criada com sucesso
 *       400:
 *         description: Dados invalidos ou ausentes
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/transactions", createTransaction);

/**
 * @swagger
 * /api/financial/transactions:
 *   get:
 *     summary: Listar transacoes financeiras
 *     tags: [Financial]
 *     parameters:
 *       - in: query
 *         name: category_id
 *         schema:
 *           type: integer
 *         description: Filtra por categoria
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [credit, debit]
 *         description: Filtra por tipo de transacao
 *       - in: query
 *         name: from
 *         schema:
 *           type: string
 *           format: date
 *         description: Data inicial (YYYY-MM-DD)
 *       - in: query
 *         name: to
 *         schema:
 *           type: string
 *           format: date
 *         description: Data final (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: Lista de transacoes
 *       400:
 *         description: Parametros de filtro invalidos
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/transactions", getTransactions);

/**
 * @swagger
 * /api/financial/transactions/{id}:
 *   put:
 *     summary: Atualizar transacao financeira
 *     tags: [Financial]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador da transacao
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               amount:
 *                 type: number
 *                 format: float
 *               type:
 *                 type: string
 *                 enum: [credit, debit]
 *               transaction_date:
 *                 type: string
 *                 format: date
 *               category_id:
 *                 type: integer
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Transacao atualizada
 *       400:
 *         description: Dados invalidos
 *       404:
 *         description: Transacao nao encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.put("/transactions/:id", updateTransaction);

/**
 * @swagger
 * /api/financial/transactions/{id}:
 *   delete:
 *     summary: Remover transacao financeira
 *     tags: [Financial]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador da transacao
 *     responses:
 *       204:
 *         description: Transacao removida com sucesso
 *       400:
 *         description: Identificador invalido
 *       404:
 *         description: Transacao nao encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/transactions/:id", deleteTransaction);

/**
 * @swagger
 * /api/financial/summary:
 *   get:
 *     summary: Obter resumo financeiro consolidado
 *     tags: [Financial]
 *     parameters:
 *       - in: query
 *         name: start_date
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: Data inicial no formato YYYY-MM-DD
 *       - in: query
 *         name: end_date
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: Data final no formato YYYY-MM-DD
 *     responses:
 *       200:
 *         description: Indicadores de credito, debito e saldo
 *       400:
 *         description: Intervalo de datas invalido
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/summary", getSummary);

/**
 * @swagger
 * /api/financial/summary/by-category:
 *   get:
 *     summary: Obter resumo financeiro agrupado por categoria
 *     tags: [Financial]
 *     parameters:
 *       - in: query
 *         name: start_date
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: Data inicial no formato YYYY-MM-DD
 *       - in: query
 *         name: end_date
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: Data final no formato YYYY-MM-DD
 *       - in: query
 *         name: expand
 *         schema:
 *           type: string
 *         description: Use "category" para incluir nomes de categoria quando disponivel
 *     responses:
 *       200:
 *         description: Totais por categoria
 *       400:
 *         description: Intervalo de datas invalido
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/summary/by-category", getSummaryByCategory);

export default router;
