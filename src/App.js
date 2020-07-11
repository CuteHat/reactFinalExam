import React, { useContext } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./Contexts/auth";
import GuardedRoute from "./helpers/GuardedRoute";
import JobContainer from "./Containers/JobContainer";
import DetailedJob from "./components/DetailedJob";

function App() {
  const auth = useContext(AuthContext);
  return (
    <Router>
      <Header />
      <div className="main-container container">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <GuardedRoute exact path="/jobs/:id">
            <DetailedJob />
          </GuardedRoute>
          <GuardedRoute exact path="/jobs">
            <JobContainer />
          </GuardedRoute>
          <GuardedRoute exact path="/">
            <JobContainer />
          </GuardedRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
