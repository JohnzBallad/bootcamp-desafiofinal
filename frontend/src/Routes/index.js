import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import FirstTime from '../pages/FirstTime';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/welcome" component={FirstTime} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
