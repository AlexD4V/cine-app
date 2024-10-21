import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from './pages/Search';
import Details from './pages/Details';
import Recommendations from './pages/Recommendations';
import Rankings from './pages/Rankings';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/search" component={Search} />
      <Route path="/details/:id" component={Details} />
      <Route path="/recommendations" component={Recommendations} />
      <Route path="/rankings" component={Rankings} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
};

export default App;