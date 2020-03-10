import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Login from "./views/login/login";
import Main from "./views/main/main";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route
          path="/Login"
          name="Login"
          component={() => {
            return <Login />;
          }}
        />
        <Route
          path="/"
          name="Main"
          component={() => {
            return <Main />;
          }}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;
