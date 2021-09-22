export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export interface UserPayload {
  email: string;
  id: string;
}

export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: UserPayload;
}

export interface LoginFail {
  type: typeof LOGIN_FAIL;
  payload: { message: string; field: string }[];
}

export type LoginTypes = LoginRequest | LoginSuccess | LoginFail;
