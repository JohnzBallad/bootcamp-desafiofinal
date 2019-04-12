import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import FirstTime from '../pages/FirstTime';
import Dashboard from '../pages/Dashboard';

import { history } from '../store';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <ConnectedRouter history={history}>
          <Route exact path="/" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/welcome" component={FirstTime} />
          <Route path="/dashboard" component={Dashboard} />
        </ConnectedRouter>
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
