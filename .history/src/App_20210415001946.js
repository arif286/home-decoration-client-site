import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/HomePage/Home/Home";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
