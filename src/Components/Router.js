import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Tv from "../Routes/Tv";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
import { CSSTransition } from "react-transition-group";
import Header from "./Header";

const routes = [
  { path: ["/", "/movie"], name: "Movie", Component: Home },
  { path: "/movie/:id", name: "Detail", Component: Detail },
  { path: "/tv", name: "Tv", Component: Tv },
  { path: "/tv/:id", name: "Detail", Component: Detail },
];

const Container = styled.div`
  position: relative;
`;

export default () => (
  <Router>
    <Header />
    <Container>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={500}
              classNames="page"
              unmountOnExit
            >
              <Component />
            </CSSTransition>
          )}
        </Route>
      ))}
      <Route exact path="/search/:keywords" component={Search} />
    </Container>
  </Router>
);
