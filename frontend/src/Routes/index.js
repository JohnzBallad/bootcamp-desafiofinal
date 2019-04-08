import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import FirstTime from '../pages/FirstTime';

import { history } from '../store';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <ConnectedRouter history={history}>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/welcome" component={FirstTime} />
        </ConnectedRouter>
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
