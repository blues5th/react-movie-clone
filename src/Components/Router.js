import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Tv from "../Routes/Tv";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
import { CSSTransition } from "react-transition-group";
import Header from "./Header";

const movieRoutes = [
  { path: "/", name: "Movie", Component: Home },
  { path: "/movie/:id", name: "Detail", Component: Detail },
];
const tvRoutes = [
  { path: "/tv", name: "Tv", Component: Tv },
  { path: "/tv/:id", name: "Detail", Component: Detail },
];

export default () => (
  <Router>
    <Header />
    {movieRoutes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            unmountOnExit
            className="fade"
          >
            <Component />
          </CSSTransition>
        )}
      </Route>
    ))}
  </Router>
);
