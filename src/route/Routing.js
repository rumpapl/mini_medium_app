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
  const [isLogedin, setIsLogedin] = React.useState(false);
  return (
    <Router>
      <NavBar />

      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/bookmark">
          <Bookmark />
        </Route>
        {/* <Route path="/users">
              <Users />
            </Route> */}
        <Route path="/">
          {/* {isLogedin? <Home/> : <Auth/>} */}
          <Home />
        </Route>
      </Switch>

    </Router>
  )
}

export default Routing
