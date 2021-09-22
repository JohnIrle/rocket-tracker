import React from "react";
import styles from "./Error.module.css";

interface ErrorProps {
  errors: { message: string; field: string }[];
}

const Error = ({ errors }: ErrorProps) => {
  return (
    <div className={styles.error}>
      <h4>Ooops....</h4>
      <ul className="my-0">
        {errors.map((err) => (
          <li key={err.message}>{err.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Error;
