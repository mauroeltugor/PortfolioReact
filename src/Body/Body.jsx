import React from 'react'
import Left from './Left/Left';
import Right from './Right/Right';


const Body = () => {
    return (
        <div className='body'>
            <div>
                <Left/>
            </div>
            <div>
                <Right/>
            </div>
        </div>
    )
}

export default Body;
