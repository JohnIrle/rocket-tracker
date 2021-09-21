import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  const onSubmit = () => {};
  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
