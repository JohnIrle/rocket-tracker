import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LoginTypes,
  UserPayload,
} from "../actions/authenticationActionTypes";

interface InitialStateI {
  loading: boolean;
  error?: boolean;
  errorMessage?: string;
  user?: UserPayload;
}

const initialState: InitialStateI = {
  loading: true,
};
export default function authentication(
  state = initialState,
  action: LoginTypes
): InitialStateI {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case LOGIN_FAIL:
      return {
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
