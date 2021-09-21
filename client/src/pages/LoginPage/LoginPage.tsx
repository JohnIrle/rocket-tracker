import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  const onSubmit = (email: string, password: string) => {
    console.log(email, password);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
