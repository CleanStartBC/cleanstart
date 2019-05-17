import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'fontawesome';
import './App.scss';
// import Layout from './Layout';

import { AsyncHome, AsyncPage, AsyncPreview, AsyncPost } from './components/async';

const App = (props) => (
  <Router>
    <Switch>
      <Route exact path='/' component={AsyncHome}/>
      <Route exact path="/:uid" render={routeProps => <AsyncPage {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/blog/:uid" render={routeProps => <AsyncPost {...routeProps} prismicCtx={props.prismicCtx} />} />
      {/* <Layout exact path='/' component={AsyncHome}/>
      <Layout exact path="/:uid" component={AsyncPage} prismicCtx={props.prismicCtx} />
      <Layout exact path="/blog/:uid" component={AsyncPost} prismicCtx={props.prismicCtx} /> */}
      <Route exact path="/preview" render={routeProps => <AsyncPreview {...routeProps} />} />

    </Switch>
  </Router>
)

export default App
