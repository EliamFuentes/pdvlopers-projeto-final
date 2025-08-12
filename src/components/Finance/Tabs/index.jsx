import { useState } from "react";
import styles from "./Tabs.module.css";
import { TransactionItem } from "../TransactionItem";
import { TransactionList } from "../TransactionList";
import { Header } from "../Header";

export function Tabs() {
    const [tabAtiva, setTabAtiva] = useState("transacoes");

    return (
        <div>
            <div className={styles.tabsContainer}>
                <button
                    className={
                        tabAtiva === "transacoes"
                            ? `${styles.tab} ${styles.ativa}`
                            : styles.tab
                    }
                    onClick={() => setTabAtiva("transacoes")}
                >
                    Transações
                </button>
                <button
                    className={
                        tabAtiva === "graficos"
                            ? `${styles.tab} ${styles.ativa}`
                            : styles.tab
                    }
                    onClick={() => setTabAtiva("graficos")}
                >
                    Gráficos
                </button>
            </div>

            <div className={styles.tabContent}>
                {tabAtiva === "transacoes" && (
                    <>
                        <Header title="Últimas Transações" subtitle="Histórico de entradas e saídas" size="small" />
                        <div className={styles.containerLastTransactions}>
                            <TransactionItem title="Venda #001" category="vendas" date="12/08/2025" amount={150} />
                            <TransactionItem title="Compra de estoque" category="estoque" date="12/08/2025" amount={-500} />
                            <TransactionItem title="Venda #002" category="vendas" date="12/08/2025" amount={89.90} />
                            <TransactionItem title="Aluguel" category="despesas" date="12/08/2025" amount={-1200} />
                        </div>
                    </>
                )}
                {tabAtiva === "graficos" && (
                    <>
                        <Header title="Lucro vs Prejuízo" subtitle="Comparativo mensal dos últimos 6 meses" size="small" />
                        <div className={styles.containerLastTransactions}>
                            <TransactionList />
                        </div>

                    </>
                )}
            </div>
        </div >
    );
}