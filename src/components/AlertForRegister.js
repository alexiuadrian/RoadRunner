import React from 'react-router';

export default function AlertForRegister(props) {
    const registerError = props.registerError;
    console.log(registerError);
    
    if (registerError) {
        return (
            <div class="alert alert-danger" role="alert">
                Email or username has already been taken or password doesn't meet the required complexity
            </div>
        );
    }
    else {
        return (
            <div>

            </div>
        );
    }
}