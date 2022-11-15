import React, { useContext } from "react";
import { UserForm } from "../components/userForm/UserForm";
import { GraphqlMutationContainer } from "../containers/graphqlMutationContainer";
import ContextWrapper from "../Context";
import { gql } from "@apollo/client";
import { Context } from "../Context";
const REGISTER = gql`
    mutation signup($input: UserCredentials!) {
        signup(input: $input)
    }
`;

const LOGIN = gql`
    mutation login($input: UserCredentials!) {
        login(input: $input)
    }
`;

const RegisterComponent = GraphqlMutationContainer(UserForm, REGISTER);
const LoginComponent = GraphqlMutationContainer(UserForm, LOGIN);

function NotRegisteredUser(props) {
    
    const { activateAuth } = useContext(Context);

    return (
        // <ContextWrapper.Consumer>
        //     {({ isAuth, activateAuth }) => {
        // return
        <>
            <RegisterComponent
                onSubmit={activateAuth}
                title={"Registrarse"}
                errorMessage={"El usuario ya existe o hay algun problema"}
            ></RegisterComponent>
            <LoginComponent
                onSubmit={activateAuth}
                title={"Iniciar sesión"}
                errorMessage={"Hubo un problema al autenticar el usuario"}
            ></LoginComponent>
        </>
        //     }}
        // </ContextWrapper.Consumer>
    );
}

export { NotRegisteredUser };
