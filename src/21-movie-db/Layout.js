import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Movie from "./components/movies/SingleMovie";

function Layout() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies/:id" children={<Movie />} />
    </Switch>
  );
}

export default Layout;
