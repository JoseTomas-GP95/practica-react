import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import Fetch from "./components/Fetch";
import FetchClass from "./components/FetchClass";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/fetch" component={Fetch}></Route>
        <Route path="/fetchclass" component={FetchClass}></Route>
      </Switch>
    </Router>
  );
}
