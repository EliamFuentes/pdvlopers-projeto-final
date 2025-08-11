# Sistema de Fidelidade - Backend API

API REST para sistema de fidelidade de clientes desenvolvida em Express.js com Supabase.

## 🚀 Tecnologias

- **Express.js** - Framework web
- **Supabase** - Banco de dados PostgreSQL
- **JWT** - Autenticação
- **Swagger** - Documentação da API
- **Docker** - Containerização
- **Jest** - Testes

## 👥 Equipe Backend

| Desenvolvedor | Responsabilidade | Arquivos Principais |
|---------------|------------------|-------------------|
| **Geraldo** | Autenticação & Segurança | `src/routes/authRoutes.js`, `src/middleware/authMiddleware.js` |
| **Fabio N.** | Gestão de Clientes | `src/routes/clientRoutes.js`, `src/models/Client.js` |
| **Felipe F.** | Controle de Fidelidade | `src/routes/loyaltyRoutes.js`, `src/models/LoyaltyTransaction.js` |
| **João Jacques** | Promoções & Comunicação | `src/routes/promotionRoutes.js`, `src/models/Promotion.js` |
| **Helen** | Financeiro | `src/routes/financialRoutes.js`, `src/models/FinancialTransaction.js` |
| **Jose Felipe** | Infraestrutura & Documentação | `Dockerfile`, `docker-compose.yml`, `.github/workflows/` |

## 🛠️ Instalação

1. **Clone o repositório**
\`\`\`bash
git clone <repository-url>
cd fidelidade-backend
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
\`\`\`

3. **Configure as variáveis de ambiente**
\`\`\`bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
\`\`\`

4. **Execute as migrações do banco**
\`\`\`bash
# Execute os arquivos SQL em database/migrations/ no Supabase
\`\`\`

5. **Inicie o servidor**
\`\`\`bash
npm run dev
\`\`\`

## 🐳 Docker

\`\`\`bash
# Build da imagem
npm run docker:build

# Executar com Docker Compose
docker-compose up -d
\`\`\`

## 📚 Documentação

A documentação da API está disponível em:
- **Desenvolvimento**: http://localhost:3000/api-docs
- **Produção**: https://api.fidelidade.com/api-docs

## 🧪 Testes

\`\`\`bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
src/
├── config/          # Configurações (database, swagger)
├── middleware/      # Middlewares (auth, validation, error)
├── models/          # Modelos de dados
├── routes/          # Rotas da API
├── utils/           # Utilitários e helpers
└── server.js        # Arquivo principal

database/
├── migrations/      # Migrações do banco
└── seeds/          # Dados iniciais

tests/              # Testes automatizados
\`\`\`

## 🔐 Autenticação

A API utiliza JWT (JSON Web Tokens) para autenticação. Inclua o token no header:

\`\`\`
Authorization: Bearer <seu-jwt-token>
\`\`\`

## 📊 Monitoramento

- **Health Check**: `GET /health`
- **Logs**: Disponíveis em `logs/`
- **Métricas**: Implementar com Prometheus (futuro)

## 🚀 Deploy

O deploy é automatizado via GitHub Actions para:
- **Staging**: Branch `develop`
- **Produção**: Branch `main`

## 📝 Contribuição

1. Crie uma branch para sua feature: `git checkout -b feature/nome-da-feature`
2. Faça commit das mudanças: `git commit -m 'Add: nova feature'`
3. Push para a branch: `git push origin feature/nome-da-feature`
4. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com a equipe backend.
