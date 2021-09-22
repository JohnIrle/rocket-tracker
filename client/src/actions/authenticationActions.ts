import axios from "axios";
import { Dispatch } from "redux";
import { ThunkActionType } from "../store";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LoginTypes,
} from "./authenticationActionTypes";

export const logIn =
  (email: string, password: string): ThunkActionType =>
  async (dispatch: Dispatch<LoginTypes>) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const response = await axios.post("/api/users/signin", {
        email,
        password,
      });

      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
