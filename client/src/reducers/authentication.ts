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
        draft.errorMessage = action.payload;
      });
    default:
      return state;
  }
}
