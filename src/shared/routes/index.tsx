import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import SignIn from '../../modules/public/pages/SignIn';
import SignUp from '../../modules/public/pages/SignUp';
import Dashboard from '../../modules/dashboard/pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Redirect from="/" to="/signin" exact />
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
