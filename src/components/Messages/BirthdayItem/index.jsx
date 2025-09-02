import styles from './BirthdayItem.module.css'

import { MdOutlineEmail } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { IoGiftOutline } from "react-icons/io5";


export function BirthdayItem({ name, date, phoneNumber, email }) {
    const formattedDate = date instanceof Date
        ? date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })
        : date;

    return (
        <div className={styles.list}>
            <div className={styles.item}>
                <div className={styles.left}>
                    <div className={styles.iconWrapper}>
                        <span className={styles.icon}><IoGiftOutline /></span>
                    </div>

                    <div className={styles.details}>
                        <span className={styles.title}>{name}</span>
                        <div className={styles.meta}>
                            <span>Aniversário: {formattedDate}</span>
                        </div>
                        <div className={styles.information}>
                            <span>{phoneNumber}</span>
                            <span>{email}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.containerButton}>
                    <button className={styles.button}><FiMessageCircle /> WhatsApp</button>
                </div>
            </div>
        </div>


    )
}