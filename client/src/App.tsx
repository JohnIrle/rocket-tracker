import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/login" exact component={LoginPage} />
      </Router>
    </Provider>
  );
}

export default App;
