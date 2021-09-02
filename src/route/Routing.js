import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Bookmark from '../components/bookmark/Bookmark';
import NavBar from '../components/navbar/NavBar';
import Home from '../components/home/Home';
import Auth from '../components/auth/Auth';

const Routing = () => {

  return (
    <Router>
      <Switch>
        <Route path="/bookmark">
          <Bookmark />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Auth />
        </Route>
      </Switch>

    </Router>
  )
}

export default Routing
