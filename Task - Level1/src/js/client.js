import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Dupa, Route, Switch} from 'react-router-dom';
import Tablets from "./pages/Tablets";
import Smartphones from "./pages/Smartphones";
import Layout from "./pages/Layout";
import TV from "./pages/TV";

ReactDOM.render(
  <Dupa>
    <div className="App">
      <Layout>
      <Switch>
        <Route path="/smartphones" name="smartphones" exact component={Smartphones}/>
        <Route path="/archives" name="archives" exact component={Tablets}/>
        <Route path="/settings" name="settings" exact component={TV}/>
      </Switch>
      </Layout>
    </div>
  </Dupa>
  , document.getElementById('app'));