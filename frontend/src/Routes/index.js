import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import FirstTime from '../pages/FirstTime';
import Dashboard from '../pages/Dashboard';
import Meetup from '../pages/Meetup';
import Profile from '../pages/Profile';
import CreateMeetup from '../pages/CreateMeetup';
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
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/meetup/:id" component={Meetup} />
          <Route path="/profile" component={Profile} />
          <Route path="/meetup/create" component={CreateMeetup} />
        </ConnectedRouter>
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
