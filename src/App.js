import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from './Loading';
// import Navigation from './Navigation';
import Preview from './Preview';
// import Footer from './Footer';
// import Helmet from 'react-helmet';
import 'fontawesome';
// import { Css } from './styles';
import './App.scss';

const AsyncHome = Loadable({
  loader: () => import("./Home" /* webpackChunkName: "home" */),
  loading: Loading
});

const AsyncPage = Loadable({
  loader: () => import("./Page" /* webpackChunkName: "page" */),
  loading: Loading
});

const App = (props) => (
  <Router>
    <Switch>
      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} />} />
      <Route exact path='/' component={AsyncHome}/>
      <Route exact path="/:uid" render={routeProps => <AsyncPage {...routeProps} prismicCtx={props.prismicCtx} />} />
    </Switch>
  </Router>
)

export default App
