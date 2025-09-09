import { useState, useEffect } from 'react';
import styles from './finances.module.css';

export function Finances() {
  // 1. Armazenamento de Dados (Estado)
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true); // Um estado para controlar o carregamento
  const [error, setError] = useState(null); // Um estado para armazenar erros

  // 2. Efeito para Buscar Dados na API
  useEffect(() => {
    // Função assíncrona para buscar os dados
    async function fetchTransactions() {
      try {
        // Faz a chamada GET para a sua API
        const response = await fetch('http://localhost:3333/api/finance/transactions');
        
        if (!response.ok) {
          throw new Error('A resposta da rede não foi OK');
        }

        const data = await response.json();
        setTransactions(data); // Guarda os dados no nosso estado
      } catch (err) {
        setError(err.message); // Guarda a mensagem de erro
      } finally {
        setLoading(false); // Para de carregar, independentemente de sucesso ou erro
      }
    }

    fetchTransactions(); // Executa a função de busca
  }, []); // O array vazio [] significa que este efeito roda apenas UMA VEZ, quando o componente é montado.

  // 3. Renderização Condicional
  if (loading) {
    return <div className={styles.finances}><h1>Carregando...</h1></div>;
  }

  if (error) {
    return <div className={styles.finances}><h1>Erro: {error}</h1></div>;
  }

  return (
    <div className={styles.finances}>
      <div>
        <h1>Finanças</h1>
        {/* 4. Mapeamento e Exibição dos Dados */}
        <ul>
          {transactions.length > 0 ? (
            transactions.map(transaction => (
              <li key={transaction.id}>
                {transaction.description} - R$ {transaction.amount} ({transaction.type})
              </li>
            ))
          ) : (
            <p>Nenhuma transação encontrada.</p>
          )}
        </ul>
      </div>
    </div>
  );
}