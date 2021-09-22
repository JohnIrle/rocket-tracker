import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { logIn } from "../authenticationActions";
import { LOGIN_REQUEST } from "../authenticationActionTypes";
const mockStore = configureStore([thunk]);

it("should dispatch LOGIN_REQUEST", async () => {
  const store = mockStore({});

  await store.dispatch<any>(logIn("test@test.com", "asdf"));
  const actions = store.getActions();
  expect(actions[0]).toEqual({ type: LOGIN_REQUEST });
});
