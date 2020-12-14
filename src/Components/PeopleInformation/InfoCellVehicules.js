import React from 'react';
import styles from './InfoCell.css'

const InfoCellVehicles = (props) => {
    return (
        <div className={styles.infoCell}>
            <div className={styles.textAlign}>
                {props.data}
            </div>
        </div>
    )
}

export default InfoCellVehicles
