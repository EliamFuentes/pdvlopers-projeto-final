// routes/authRoutes.js
const express = require("express");
const rateLimit = require("express-rate-limit");
const router = express.Router();

// Controllers
const auth = require("../controllers/auth.controller");
const twoFA = require("../controllers/2fa.controller");

// Middleware (ajuste o caminho conforme sua árvore real)
const authMiddleware = require("../middleware/authMiddleware");

// Helper para propagar erros async ao errorHandler global
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

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
 *             required: [email, password, name]
 *             properties:
 *               email: { type: string }
 *               password: { type: string }
 *               name: { type: string }
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */

// Limiter opcional específico para endpoints sensíveis (além do global)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

// Rotas públicas
router.post("/register", authLimiter, asyncHandler(auth.register));     // 201
router.post("/login", authLimiter, asyncHandler(auth.login));           // 200 (retorna { accessToken, refreshToken, user })
router.post("/forgot-password", authLimiter, asyncHandler(auth.forgotPassword));
router.post("/refresh", asyncHandler(auth.refreshToken));

// 2FA (mudar generate -> setup; POST pois gera segredo)
router.post("/2fa/setup", authMiddleware, asyncHandler(twoFA.generate2FA));
router.post("/2fa/verify", authMiddleware, asyncHandler(twoFA.verify2FA));

// Rotas protegidas
router.get("/me", authMiddleware, asyncHandler(auth.getMe));

module.exports = router;
