import "App.scss";

import { Router, Switch, Route, Redirect } from "react-router-dom";
import { Home, Jobs, JobDetail, JobManager } from "pages";
import { TopBar, NavBar } from "components";
import { history } from "./helpers/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div className="not-fluid">
          <TopBar></TopBar>
        </div>
        <hr />
        <div className="not-fluid">
          <NavBar></NavBar>
        </div>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/jobs">
            <Jobs></Jobs>
          </Route>
          <Route path="/job-manager">
            <JobManager></JobManager>
          </Route>
          <Route path="/jobs/:id">
            <JobDetail></JobDetail>
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
