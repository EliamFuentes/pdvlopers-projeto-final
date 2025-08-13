import styles from "./messages.module.css";

import { Tabs } from "../../components/Finance/Tabs";
import { Header } from "../../components/Finance/Header";
import { SendMessages } from "../../components/Messages/SendMessages";

import { MdOutlineEmail } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";


export function Messages() {
    const tabs = [
        {
            id: "mensagens",
            label: "Enviar Mensagens",
            content: (
                <div className={styles.containerMessage}>
                    <div className={styles.cardWrapper}>
                        <Header
                            title="Envio por Email"
                            subtitle="Envie promoções e newsletters por email"
                            size="small"
                        />
                        <div className={styles.cardEmail}>
                            <div className={styles.sendEmail}>
                                <SendMessages
                                    icon={<MdOutlineEmail />}
                                    text="Crie campanhas de email personalizadas"
                                />
                                <button>Criar Email</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardWrapper}>
                        <Header
                            title="Envio por WhatsApp"
                            subtitle="Envie mensagens diretas via WhatsApp"
                            size="small"
                        />
                        <div className={styles.cardWhatsApp}>
                            <div className={styles.sendWhatsApp}>
                                <SendMessages
                                    icon={<IoChatbubbleOutline />}
                                    text="Envie mensagens instantâneas para seus clientes"
                                />
                                <button>Criar Mensagem</button>
                            </div>
                        </div>
                    </div>
                </div>


            ),
        },
        {
            id: "aniversariantes",
            label: "Aniversariantes",
            content: (
                <>
                    <Header
                        title="Aniversariantes do Mês"
                        subtitle="Clientes que fazem aniversário este mês"
                        size="small"
                    />
                </>
            ),
        },
        {
            id: "historico",
            label: "Histórico",
            content: (
                <>
                    <Header
                        title="Histórico de Envios"
                        subtitle="Campanhas e mensagens enviadas"
                        size="small"
                    />
                </>
            ),
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header
                    title="Mensagens"
                    subtitle="Envie promoções e mensagens para seus clientes"
                />
            </div>


            <div className={styles.tabs}>
                <Tabs tabs={tabs} />
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}
