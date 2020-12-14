import React from 'react';
import styles from './InfoCell.css'

const InfoCell = (props) => {
    return (
        <div className={styles.infoCell}>
            <div className={styles.textAlign}>
                {props.feature}
                <span className={styles.text}>{props.data}</span>
            </div>
        </div>
    )
}

export default InfoCell