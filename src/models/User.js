// Modelo de usuário para referência (Back 1 - Geraldo)
const userSchema = {
  id: "uuid",
  email: "string (unique)",
  password: "string (hashed)",
  name: "string",
  role: "enum (admin, manager, employee)",
  active: "boolean",
  two_factor_enabled: "boolean",
  two_factor_secret: "string",
  created_at: "timestamp",
  updated_at: "timestamp",
}

module.exports = { userSchema }
