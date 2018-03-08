import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Tablets from "./pages/Tablets";
import Smartphones from "./pages/Smartphones";
import Layout from "./pages/Layout";
import TV from "./pages/TV";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Smartphones}></IndexRoute>
      <Route path="archives" name="archives" component={Tablets}></Route>
      <Route path="settings" name="settings" component={TV}></Route>
    </Route>
  </Router>,
app);
