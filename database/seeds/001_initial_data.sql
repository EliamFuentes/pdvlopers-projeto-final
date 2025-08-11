-- Dados iniciais para desenvolvimento (Back 6 - Jose Felipe)

-- Usuário administrador padrão
INSERT INTO users (email, password, name, role) VALUES 
('admin@fidelidade.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VcSAg9S6O', 'Administrador', 'admin');
-- Senha: admin123

-- Clientes de exemplo
INSERT INTO clients (name, cpf, email, phone, birth_date, points_balance, total_spent) VALUES 
('João Silva', '12345678901', 'joao@email.com', '11999999999', '1990-05-15', 150, 500.00),
('Maria Santos', '98765432100', 'maria@email.com', '11888888888', '1985-12-20', 300, 1200.00),
('Pedro Oliveira', '11122233344', 'pedro@email.com', '11777777777', '1992-08-10', 75, 250.00);

-- Brindes de exemplo
INSERT INTO rewards (name, description, points_required) VALUES 
('Desconto 10%', 'Desconto de 10% na próxima compra', 100),
('Brinde Especial', 'Produto promocional exclusivo', 200),
('Desconto 20%', 'Desconto de 20% na próxima compra', 300);

-- Promoções de exemplo
INSERT INTO promotions (title, description, type, active, start_date, end_date) VALUES 
('Aniversariantes do Mês', 'Promoção especial para aniversariantes', 'birthday', true, '2024-01-01', '2024-12-31'),
('Cliente VIP', 'Benefícios para clientes com mais de 500 pontos', 'points_based', true, '2024-01-01', '2024-12-31');
