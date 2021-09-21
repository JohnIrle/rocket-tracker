import React, { useState } from "react";
import styles from "./LoginForm.module.css";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className={styles.loginForm}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(email, password);
      }}
    >
      <label>
        Email:
        <input
          type="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
