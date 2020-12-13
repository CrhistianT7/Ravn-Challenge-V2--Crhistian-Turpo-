import React from 'react'
import './LoadingCell.css'
import Loader from 'react-loader-spinner'


const loadingIndicator = () => {

}

const loadingCell = () => {
    return (
        <div className='maindiv'>
            <div>
                <Loader
                    type='TailSpin'
                    color='#828282'
                    height={20}
                    width={20}
                />
            </div>
            <div className='text'>Loading</div>
            {/* <div className="lds-spinner"><div>.</div><div>.</div><div>.</div><div>.</div><div>e</div><div>e</div><div>e</div><div>e</div><div>e</div></div> */}
        </div>
    );
}

export default loadingCell