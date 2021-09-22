import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { logIn } from "../../actions/authenticationActions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const onSubmit = (email: string, password: string) => {
    dispatch(logIn(email, password));
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
