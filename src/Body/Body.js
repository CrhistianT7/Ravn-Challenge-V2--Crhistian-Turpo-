import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import './Body.css'

const body = () => {
    return (
        <div className='bodydiv'> 
            <LeftSide/>
            <hr></hr>
            <RightSide/>
            <section>asdaaa</section>
        </div>
    );
}

export default body