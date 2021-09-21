import React from "react";
import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

it("should contain an email and password form and submit button", () => {
  const onSubmit = jest.fn();
  render(<LoginForm onSubmit={onSubmit} />);

  expect(screen.getByRole("textbox", { name: /email:/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
});

it("should call handleSubmit", () => {
  const onSubmit = jest.fn();
  render(<LoginForm onSubmit={onSubmit} />);

  userEvent.click(screen.getByText(/submit/i));

  expect(onSubmit).toHaveBeenCalled();
});

it("should call handleSubmit with correct input values", () => {
  const email = "test@test.com";
  const password = "supersecret";
  const onSubmit = jest.fn();
  render(<LoginForm onSubmit={onSubmit} />);

  userEvent.type(screen.getByRole("textbox", { name: /email:/i }), email);
  userEvent.type(screen.getByLabelText(/password/i), password);
  userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith(email, password);
});
