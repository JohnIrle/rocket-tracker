import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { logIn } from "../authenticationActions";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../authenticationActionTypes";
const mockStore = configureStore([thunk]);

it("should dispatch LOGIN_REQUEST", async () => {
  const store = mockStore({});

  await store.dispatch<any>(logIn("test@test.com", "asdf"));
  const actions = store.getActions();
  expect(actions[0]).toEqual({ type: LOGIN_REQUEST });
});

it("should dispatch LOGIN_SUCCESS with a payload", async () => {
  const store = mockStore({});

  await store.dispatch<any>(logIn("test@test.com", "test"));
  const actions = store.getActions();
  expect(actions[1]).toEqual({
    type: LOGIN_SUCCESS,
    payload: { email: "test@test.com", id: "614aa2be1849a35943840d89" },
  });
});

it("should dispatch LOGIN_FAIL with email error and include error array", async () => {
  const store = mockStore({});

  await store.dispatch<any>(logIn("", "test"));
  const actions = store.getActions();
  expect(actions[1]).toEqual({
    type: LOGIN_FAIL,
    payload: [{ message: "Email must be valid", field: "email" }],
  });
});

it("should dispatch LOGIN_FAIL with password error and include error array", async () => {
  const store = mockStore({});

  await store.dispatch<any>(logIn("test@test.com", ""));
  const actions = store.getActions();
  expect(actions[1]).toEqual({
    type: LOGIN_FAIL,
    payload: [{ message: "You must supply a password", field: "password" }],
  });
});

it("should dispatch LOGIN_FAIL with wrong password and include error array", async () => {
  const store = mockStore({});

  await store.dispatch<any>(logIn("test@test.com", "test2"));
  const actions = store.getActions();
  expect(actions[1]).toEqual({
    type: LOGIN_FAIL,
    payload: [{ message: "Invalid Credentials", field: "password" }],
  });
});
