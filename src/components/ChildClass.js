import React from 'react';

function childFunction(props){
    return (
        <div>
            <button onClick={()=> props.clickHandler('Rohan')}>Click</button>
        </div>
    )
}
export default childFunction