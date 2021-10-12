import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./Signup/Signup";
export const UnAuthenticated = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-up">
            <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
