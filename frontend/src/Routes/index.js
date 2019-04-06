import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signin from '../pages/Signin';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Signin} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
