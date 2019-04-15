import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import FirstTime from '../pages/FirstTime';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Meetup from '../pages/Meetup';
import Header from '../components/Header';

import { history } from '../store';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <ConnectedRouter history={history}>
          <Route exact path="/" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/welcome" component={FirstTime} />
          <Header />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/meetup/create" component={Meetup} />
        </ConnectedRouter>
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
