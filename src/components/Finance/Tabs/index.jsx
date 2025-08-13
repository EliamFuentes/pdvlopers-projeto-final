import { useState } from "react";
import styles from "./Tabs.module.css";

export function Tabs({ tabs }) {
    const [tabAtiva, setTabAtiva] = useState(tabs[0].id);

    return (
        <div>
            <div className={styles.tabsContainer}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={
                            tabAtiva === tab.id
                                ? `${styles.tab} ${styles.ativa}`
                                : styles.tab
                        }
                        onClick={() => setTabAtiva(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className={styles.tabContent}>
                {tabs.find((tab) => tab.id === tabAtiva)?.content}
            </div>
        </div>
    );
}
