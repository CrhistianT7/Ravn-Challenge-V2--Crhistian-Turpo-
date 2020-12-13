import React from 'react';
import { Spinner, Ring } from 'react-spinners-css';

const leftSideSection = () => {
    return(
        <section>
            <div>
            <Ring color='#828282' size={20}/>
            </div>
            Loading...
        </section>
    );
}

export default leftSideSection