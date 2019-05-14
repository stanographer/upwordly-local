import React, { Fragment } from 'react';
import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.scss';
import * as ROUTES from './constants/routes';

// Routed components, lazy loaded.
const Dashboard =  Loadable({
  loader: () => import('./components/Dashboard'),
  loading: () => <div>Loading...</div>,
});

const SignIn = Loadable({
  loader: () => import('./components/SignIn'),
  loading: () => <div>Loading...</div>,
});

const Watch = Loadable({
  loader: () => import('./components/Watch'),
  loading: () => <div>Loading...</div>,
});

const App = () =>
  <Router>
    <Fragment>
      <Route path="/" component={ SignIn } />
      <Route path={ ROUTES.DASHBOARD } component={ Dashboard } />
      <Route path={ ROUTES.SIGN_IN } component={ SignIn } />
      <Route path={ ROUTES.WATCH } component={ Watch } />
    </Fragment>
  </Router>;

export default App;
