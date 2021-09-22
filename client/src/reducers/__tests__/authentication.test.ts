import authentication from "../authentication";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../../actions/authenticationActionTypes";

it("should return an error message on LOGIN_FAIL", () => {
  expect(
    authentication(undefined, {
      type: LOGIN_FAIL,
      payload: [{ message: "Email must be valid", field: "email" }],
    })
  ).toEqual({
    loading: false,
    error: true,
    errorMessages: [{ message: "Email must be valid", field: "email" }],
  });
});

it("should return loading on LOGIN_REQUEST", () => {
  expect(
    authentication(undefined, {
      type: LOGIN_REQUEST,
    })
  ).toEqual({
    loading: true,
    error: false,
    errorMessages: [],
  });
});

it("should return a user payload with LOGIN_SUCCESS", () => {
  expect(
    authentication(undefined, {
      type: LOGIN_SUCCESS,
      payload: { email: "test@test.com", id: "614aa2be1849a35943840d89" },
    })
  ).toEqual({
    loading: false,
    error: false,
    errorMessages: [],
    user: { email: "test@test.com", id: "614aa2be1849a35943840d89" },
  });
});
