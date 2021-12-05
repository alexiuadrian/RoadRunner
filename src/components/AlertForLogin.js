import React from 'react-router';

export default function AlertForRegister(props) {
    const registerError = props.registerError;
    console.log(registerError);
    
    if (registerError) {
        return (
            <div class="alert alert-danger" role="alert">
                Invalid username or password
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