import styles from "./finances.module.css";

import { useState } from "react";

import { Button } from "../../components/Finance/Button";
import { TransactionCard } from "../../components/Finance/TransactionCard";
import { Tabs } from "../../components/Finance/Tabs";
import { TabContent } from "../../components/Finance/TabContent";
import { TransactionItem } from "../../components/Finance/TransactionItem";
import { TransactionList } from "../../components/Finance/TransactionList";
import { Header } from "../../components/Finance/Header";
import { TransactionModal } from "../../components/Finance/TransactionModal";

import { FaPlus } from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

export function Finances() {

    const [transactions, setTransactions] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const buttons = [
        { id: 'transacoes', label: "Transações" },
        { id: 'graficos', label: "Gráficos" },
    ];

    const contents = {
        transacoes: (
            <TabContent
                title="Transações"
                subtitle="Visualize e gerencie suas transações"
            >
                {transactions.length > 0 ? (
                    transactions.map((t) => (
                        <TransactionItem key={t.id} {...t} />
                    ))
                ) : (
                    <p>Nenhuma transação cadastrada ainda</p>
                )}
            </TabContent>
        ),
        graficos: (
            <TabContent
                title="Gráficos"
                subtitle="Acompanhe o desempenho financeiro"
            >
                <TransactionList />
            </TabContent>
        ),
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header
                    title="Financeiro"
                    subtitle="Controle suas finanças e fluxo de caixa"
                />
                <div>
                    <Button icon={<FaPlus />} text="Nova Transação" onClick={() => setShowModal(true)} />

                    {showModal && (
                        <TransactionModal
                            onSave={(newTransaction) =>
                                setTransactions((prev) => [...prev, newTransaction])
                            }
                            onClose={() => setShowModal(false)}
                        />
                    )}
                </div>

            </div>

            <div className={styles.cards}>
                <TransactionCard
                    title="Total Entradas"
                    amount="R$ 239,90"
                    subtitle="Este mês"
                    icon={<FaArrowTrendUp />}
                    color="green"
                />
                <TransactionCard
                    title="Total Saídas"
                    amount="R$ 1.700,00"
                    subtitle="Este mês"
                    icon={<FaArrowTrendDown />}
                    color="red"
                />
                <TransactionCard
                    title="Saldo"
                    amount="R$ -1.460,10"
                    subtitle="Saldo atual"
                    icon={<MdOutlineAttachMoney />}
                    color="red"
                />
                <TransactionCard
                    title="Transações"
                    amount="4"
                    subtitle="Este mês"
                    icon={<CiCalendar />}
                    color="black"
                />
            </div>

            <div className={styles.tabs}>
                <Tabs buttons={buttons} contents={contents} />
            </div>
        </div>
    );
}
