import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LoginTypes,
  UserPayload,
} from "../actions/authenticationActionTypes";
import produce from "immer";

interface InitialStateI {
  loading: boolean;
  error: boolean;
  errorMessages: { message: string; field: string }[];
  user?: UserPayload;
}

const initialState: InitialStateI = {
  loading: true,
  error: false,
  errorMessages: [],
};
export default function authentication(
  state = initialState,
  action: LoginTypes
): InitialStateI {
  switch (action.type) {
    case LOGIN_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case LOGIN_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.user = action.payload;
      });
    case LOGIN_FAIL:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = true;
        draft.errorMessages = action.payload;
      });
    default:
      return state;
  }
}
