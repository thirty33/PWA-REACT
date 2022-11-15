import React, { useEffect } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title, Error } from "./styles";
import { SubmitButton } from '../SubmitButton/SubmitButton'

function UserForm({ onSubmit, title, mutateAction, manager, errorMessage }) {
  const email = useInputValue("");
  const password = useInputValue("");

  const { data, loading, error } = manager;

  const onHandleSubmit = (e) => {
    e.preventDefault();

    mutateAction({
      variables: {
        input: {
          email: email.value,
          password: password.value,
        },
      },
    }).then(({ data }) => {
      onSubmit(data);
    });
  };

  return (
    <>
      <Form disabled={loading} onSubmit={onHandleSubmit}>
        <Title>{title}</Title>
        <Input disabled={loading} placeholder="Email" {...email} />
        <Input disabled={loading} placeholder="Password" {...password} />
        <SubmitButton disabled={loading}>{title}</SubmitButton>
        {error && <Error>{errorMessage}</Error>}
      </Form>
    </>
  );
}

export { UserForm };
