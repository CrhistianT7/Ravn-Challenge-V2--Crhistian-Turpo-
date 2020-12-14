import React from 'react'
import { Ring } from 'react-spinners-css';
import styles from './LoadingCell.css'


//** For the loading indicator we're using the library react-spinners-css */
const loadingCell = () => {
    return(
        <div className={styles.loadingCell}>
            <div className={styles.loadingIndicator}>
                <Ring color='#828282' size={20}/>
                <span>Loading</span>
            </div>
        </div>
    );
}

export default loadingCell