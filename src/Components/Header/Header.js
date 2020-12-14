import React from 'react'
import styles from "./Header.css"


const header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.text}> Ravn Star Wars Registary </div>
        </header>
    );
}

export default header;