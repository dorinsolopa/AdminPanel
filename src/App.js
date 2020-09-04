import React from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { routes, publicRoutes } from "./router/routes";

function App() {
  return (
    <React.Fragment>
      <AppRouter routes={routes} publicRoutes={publicRoutes} />
    </React.Fragment>
  );
}

export default App;
