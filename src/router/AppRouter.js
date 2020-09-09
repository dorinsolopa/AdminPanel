import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar"
import AppLayout from "./AppLayout";
import "../components/chart/Card.css"
class AppRouter extends React.Component {
  render() {
    const routes = this.props.routes;
    const allRoutes = [].concat(routes, this.props.publicRoutes);
    return (
      <BrowserRouter>
       <div ><Navbar/></div>
        <AppLayout activeClassName="selected" routes={routes}>
          <Switch>
            {allRoutes.map((route, index) => {
              return (
                <Route 
                activeClassName="active"
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                  icon={route.icon}
                  key={route.path}
                />
              );
            })}
            <Route
              component={() => {
                return <div>oops ERROR</div>;
              }}
            />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
