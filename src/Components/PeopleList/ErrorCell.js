import React from 'react';
import styles from './ErrorCell.css'

const errorCell = () => {
    return (
        <div className={styles.errorCell}>
            <div className={styles.textStyle}>Failed to Load Data</div>
        </div>
    );
}

export default errorCell;