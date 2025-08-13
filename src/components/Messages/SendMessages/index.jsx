import styles from './SendMessages.module.css'

export function SendMessages({ icon, text }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <span>{icon}</span>
                <span className={styles.text}>{text}</span>
            </div>
        </div>
    )
}