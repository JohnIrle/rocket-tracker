import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Router>
      <Route path="/login" exact component={LoginPage} />
    </Router>
  );
}

export default App;
