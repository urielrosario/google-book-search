import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/index";
import Saved from "./pages/Saved";
import Search from "./pages/Home";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
