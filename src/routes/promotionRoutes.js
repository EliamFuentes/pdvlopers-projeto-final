const express = require("express")
const router = express.Router()

// Listar promoções
router.get("/", (req, res) => {
  res.json({ promotions: mockPromotions })
})

// Buscar promoção por ID
router.get("/:id", (req, res) => {
  const promo = mockPromotions.find(p => p.id === req.params.id)
  if (!promo) return res.status(404).json({ error: "Promoção não encontrada" })
  res.json({ promotion: promo })
})

// Criar promoção
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body
    const newPromo = {
      id: (mockPromotions.length + 1).toString(),
      title,
      description,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    mockPromotions.push(newPromo)
    // Envio de e-mail mock já existente
    const emailPromises = mockClients.map(client => sendEmail({
      to: client.email,
      subject: `Nova promoção: ${title}`,
      text: description,
      html: `<h2>${title}</h2><p>${description}</p>`
    }))
    await Promise.allSettled(emailPromises)
    res.status(201).json({ promotion: newPromo, message: `Promoção mock criada e e-mails enviados para ${mockClients.length} clientes de teste.` })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Atualizar promoção
router.put("/:id", (req, res) => {
  const idx = mockPromotions.findIndex(p => p.id === req.params.id)
  if (idx === -1) return res.status(404).json({ error: "Promoção não encontrada" })
  const { title, description } = req.body
  mockPromotions[idx] = {
    ...mockPromotions[idx],
    title: title ?? mockPromotions[idx].title,
    description: description ?? mockPromotions[idx].description,
    updated_at: new Date().toISOString()
  }
  res.json({ promotion: mockPromotions[idx] })
})

// Deletar promoção
router.delete("/:id", (req, res) => {
  const idx = mockPromotions.findIndex(p => p.id === req.params.id)
  if (idx === -1) return res.status(404).json({ error: "Promoção não encontrada" })
  const removed = mockPromotions.splice(idx, 1)
  res.json({ message: "Promoção removida", promotion: removed[0] })
})

// --- INTEGRAÇÃO INICIAL COM BANCO (Supabase) ---
const supabase = require("../config/database")

// Exemplo de como ficaria o CRUD usando Supabase (apenas estrutura, sem lógica completa)
// Descomente e adapte quando o banco estiver pronto
/*
// Listar promoções do banco
router.get("/db", async (req, res) => {
  const { data, error } = await supabase.from("promotions").select("*")
  if (error) return res.status(500).json({ error: error.message })
  res.json({ promotions: data })
})

// Criar promoção no banco
router.post("/db", async (req, res) => {
  const { title, description } = req.body
  const { data, error } = await supabase.from("promotions").insert([
    { title, description }
  ]).select().single()
  if (error) return res.status(500).json({ error: error.message })
  res.status(201).json({ promotion: data })
})
*/


const { sendEmail } = require("../utils/email")

// MOCK: lista de clientes para teste
const mockClients = [
  { name: "Teste 1", email: "jjacques.amann@gmail.com" }
]

// MOCK: lista de promoções em memória
let mockPromotions = [
  {
    id: "1",
    title: "Promoção Teste",
    description: "Você ganhou um desconto!",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

// Listar promoções
router.get("/", (req, res) => {
  res.json({ promotions: mockPromotions })
})

// Buscar promoção por ID
router.get("/:id", (req, res) => {
  const promo = mockPromotions.find(p => p.id === req.params.id)
  if (!promo) return res.status(404).json({ error: "Promoção não encontrada" })
  res.json({ promotion: promo })
})

// Criar promoção
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body
    const newPromo = {
      id: (mockPromotions.length + 1).toString(),
      title,
      description,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    mockPromotions.push(newPromo)
    // Envio de e-mail mock já existente
    const emailPromises = mockClients.map(client => sendEmail({
      to: client.email,
      subject: `Nova promoção: ${title}`,
      text: description,
      html: `<h2>${title}</h2><p>${description}</p>`
    }))
    await Promise.allSettled(emailPromises)
    res.status(201).json({ promotion: newPromo, message: `Promoção mock criada e e-mails enviados para ${mockClients.length} clientes de teste.` })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Atualizar promoção
router.put("/:id", (req, res) => {
  const idx = mockPromotions.findIndex(p => p.id === req.params.id)
  if (idx === -1) return res.status(404).json({ error: "Promoção não encontrada" })
  const { title, description } = req.body
  mockPromotions[idx] = {
    ...mockPromotions[idx],
    title: title ?? mockPromotions[idx].title,
    description: description ?? mockPromotions[idx].description,
    updated_at: new Date().toISOString()
  }
  res.json({ promotion: mockPromotions[idx] })
})

// Deletar promoção
router.delete("/:id", (req, res) => {
  const idx = mockPromotions.findIndex(p => p.id === req.params.id)
  if (idx === -1) return res.status(404).json({ error: "Promoção não encontrada" })
  const removed = mockPromotions.splice(idx, 1)
  res.json({ message: "Promoção removida", promotion: removed[0] })
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
