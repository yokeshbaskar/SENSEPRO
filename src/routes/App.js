import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as AppRoutes from "./index";
import PrivateRoute from "../higher-order/PrivateRoute";
import AuthRoute from "../higher-order/AuthRoute";

export default function App(props) {
  return (
    <>
      <BrowserRouter basename={"/sensPro"}>
        <Switch>
          <AuthRoute exact path="/" component={AppRoutes.FirstPageRoute} />
          <AuthRoute
            exact
            path="/secondpage"
            component={AppRoutes.SecondPageRoute}
          />
          <AuthRoute
            exact
            path="/thirdpage"
            component={AppRoutes.ThirdPageRoute}
          />
          <AuthRoute
            exact
            path="/fourthpage"
            component={AppRoutes.FourthPageRoute}
          />
          <PrivateRoute
            exact
            path="/firstpage"
            component={AppRoutes.FirstPageRoute}
          />
          <PrivateRoute
            exact
            path="/secondpage"
            component={AppRoutes.SecondPageRoute}
          />
          <PrivateRoute
            exact
            path="/thirdpage"
            component={AppRoutes.ThirdPageRoute}
          />
          <PrivateRoute
            exact
            path="/fourthpage"
            component={AppRoutes.FourthPageRoute}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}
