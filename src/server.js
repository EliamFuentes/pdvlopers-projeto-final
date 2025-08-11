const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const compression = require("compression")
const rateLimit = require("express-rate-limit")
require("dotenv").config()

const { errorHandler, notFound } = require("./middleware/errorMiddleware")
const swaggerSetup = require("./config/swagger")

// Import routes
const authRoutes = require("./routes/authRoutes")
const clientRoutes = require("./routes/clientRoutes")
const loyaltyRoutes = require("./routes/loyaltyRoutes")
const promotionRoutes = require("./routes/promotionRoutes")
const financialRoutes = require("./routes/financialRoutes")

const app = express()
const PORT = process.env.PORT || 3000

// Security middleware
app.use(helmet())
app.use(cors())
app.use(compression())

// Rate limiting
const limiter = rateLimit({
  windowMs: Number.parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: Number.parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  message: "Muitas requisições, tente novamente mais tarde.",
})
app.use(limiter)

// Body parsing middleware
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true }))

// Swagger documentation
swaggerSetup(app)

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  })
})

// API routes
app.use("/api/auth", authRoutes)
app.use("/api/clients", clientRoutes)
app.use("/api/loyalty", loyaltyRoutes)
app.use("/api/promotions", promotionRoutes)
app.use("/api/financial", financialRoutes)

// Error handling middleware
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`)
  console.log(`📚 Documentação disponível em http://localhost:${PORT}/api-docs`)
})

module.exports = app
