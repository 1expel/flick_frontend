import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Profile from './pages/Profile'
import Help from './pages/help';
import TheatreList from './pages/TheatreList';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Movie from './pages/Movie';
import InviteWatcher from './pages/InviteWatchers';
import AddTheatre from './pages/AddTheatre';
import RemoveWatcher from './pages/RemoveWatcher';
import {PublicRoute, PrivateRoute} from './components';

function App() {
  return (
    <Router>
      <Switch>
        {/* <PublicRoute restricted={true} path='/' exact component={Login} /> */}
        <PublicRoute restricted={false} path='/' exact component={Login} />
        <PrivateRoute path='/Profile' component={Profile} />
        <PrivateRoute path='/theatreList' component={TheatreList} />
        <PrivateRoute path='/help' component={Help} />
        <PublicRoute restriced={true} path='/signup' component={Signup} />
        <PrivateRoute path='/selectMovies' component={Movie} />
        <PrivateRoute path='/inviteWatchers' component={InviteWatcher} />
        <PrivateRoute path='/removeWatcher' component={RemoveWatcher} />
        <PrivateRoute path='/addTheatre' component={AddTheatre} />
      </Switch>
    </Router>
  );
}

export default App;