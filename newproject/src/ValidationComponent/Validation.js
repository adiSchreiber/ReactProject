import React from 'react';

const validation = (props) => {
    let validationMessege = 'Text long enough';
    if (props.inputLength<=5){
        validationMessege = 'Text too short';
    }
        return(
            <div>
                <p>{validationMessege}</p>                    
            </div>
        );
};
export default validation;
