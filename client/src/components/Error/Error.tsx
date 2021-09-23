import React from "react";
import styles from "./Error.module.css";

interface ErrorProps {
  errors: { message: string; field: string }[];
}

const Error = ({ errors }: ErrorProps) => {
  return (
    <div className={styles.error}>
      <div className={styles.header}>
        <strong>Error</strong>
      </div>
      <div className={styles.message}>
        <ul>
          {errors.map((err) => (
            <li key={err.message}>{err.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Error;
