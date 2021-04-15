import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
import Home from "./components/HomePage/Home/Home";
import SignUp from "./components/LoginPage/SignUp/SignUp";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/dashBoard'>
            <DashBoard/>
          </Route>
          <Route path='/login'>
            <SignUp/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
