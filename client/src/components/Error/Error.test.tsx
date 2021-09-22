import { render, screen } from "@testing-library/react";
import Error from "./Error";
import React from "react";

it("should render errors", () => {
  const errors = [
    { message: "Email must be valid", field: "email" },
    { message: "You must supply a password", field: "password" },
  ];
  render(<Error errors={errors} />);

  expect(screen.getByText(/email must be valid/i)).toBeInTheDocument();
  expect(screen.getByText(/you must supply a password/i)).toBeInTheDocument();
});
