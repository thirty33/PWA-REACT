import React, { useContext } from 'react';
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton/SubmitButton'

function User(props) {

    const { removeAuth } = useContext(Context)

    return ( 
        <>
            <h1>User</h1>
            <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
        </>   
    );
}

export {User};