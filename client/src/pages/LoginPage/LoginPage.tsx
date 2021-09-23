import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { logIn } from "../../actions/authenticationActions";
import { RootStore } from "../../store";
import Error from "../../components/Error/Error";

const LoginPage = () => {
  const { authentication } = useSelector((state: RootStore) => state);
  const { error, errorMessages } = authentication;
  const dispatch = useDispatch();
  const onSubmit = (email: string, password: string) => {
    dispatch(logIn(email, password));
  };
  return (
    <div>
      <h1>Login</h1>
      {error && <Error errors={errorMessages} />}
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
