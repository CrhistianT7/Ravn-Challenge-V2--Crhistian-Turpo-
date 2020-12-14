import React from 'react'
import styles from './TableSectionHeader.css'

const TableSectionHeader = (props) => {
    return (
        <div className={styles.tableSectionHeader}>
            <div className={styles.title}>
                {props.title}
            </div>
        </div>
    )
}

export default TableSectionHeader