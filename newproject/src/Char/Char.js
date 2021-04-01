import React from 'react';
const char = (props) => {
    const style={
        disply:'inline-block',
        padding: '16px',
        margin:'16px',
        border: '1px solid pink',
        textAlign:'center'
    };
    return(
        <div style ={style}>
            {props.character}
        </div>

    );
};
export default char;