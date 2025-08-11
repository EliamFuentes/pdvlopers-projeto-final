const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sistema de Fidelidade API",
      version: "1.0.0",
      description: "API para sistema de fidelidade de clientes",
      contact: {
        name: "Equipe Backend",
        email: "backend@fidelidade.com",
      },
    },
    servers: [
      {
        url:
          process.env.NODE_ENV === "production"
            ? "https://api.fidelidade.com"
            : `http://localhost:${process.env.PORT || 3000}`,
        description: process.env.NODE_ENV === "production" ? "Produção" : "Desenvolvimento",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/routes/*.js", "./src/models/*.js"],
}

const specs = swaggerJsdoc(options)

module.exports = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      explorer: true,
      customCss: ".swagger-ui .topbar { display: none }",
    }),
  )
}
