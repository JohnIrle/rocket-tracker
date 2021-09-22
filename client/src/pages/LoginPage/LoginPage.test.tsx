import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { Provider } from "react-redux";
import store from "../../store";

it("renders", () => {
  render(
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
});

it("renders login heading", () => {
  render(
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );

  expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
});

it("renders the form", () => {
  render(
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );

  expect(screen.getByRole("textbox", { name: /email:/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/password:/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
});
