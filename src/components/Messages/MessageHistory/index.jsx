import { IoMailOutline } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './MessageHistory.module.css';

export function MessageHistory({ messages }) {
    return (
        <div className={styles.list}>
            {messages.map((msg) => (
                <div key={msg.id} className={styles.item}>
                    <div className={styles.left}>
                        <div
                            className={`${styles.iconWrapper} ${msg.type === "email" ? styles.email : styles.whatsapp
                                }`}
                        >
                            {msg.type === "email" ? (
                                <IoMailOutline className={styles.icon} />
                            ) : (
                                <FaWhatsapp className={styles.icon} />
                            )}
                        </div>

                        <div className={styles.details}>
                            <span className={styles.title}>{msg.title}</span>
                            <div className={styles.meta}>
                                <span>{msg.type === "email" ? "Email" : "WhatsApp"}</span>
                            </div>
                            <div className={styles.recipients}>
                                <span>{msg.numberRecipients} destinatários</span>
                                <span>{msg.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
