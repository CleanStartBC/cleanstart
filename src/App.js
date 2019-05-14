import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'fontawesome';
import './App.scss';

import { AsyncHome, AsyncPage, AsyncPreview } from './components/async';

const App = (props) => (
  <Router>
    <Switch>
      <Route exact path="/preview" render={routeProps => <AsyncPreview {...routeProps} />} />
      <Route exact path='/' component={AsyncHome}/>
      <Route exact path="/:uid" render={routeProps => <AsyncPage {...routeProps} prismicCtx={props.prismicCtx} />} />
    </Switch>
  </Router>
)

export default App
