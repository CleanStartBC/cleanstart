import React from 'react';
import 'fontawesome';
import './App.scss';
import { AsyncHome, AsyncPage, AsyncPreview, AsyncPost } from './components/async';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const App = (props) => (

  <Router>
    <ScrollToTop>
      <Switch>
        <Route exact path='/' render={() => <AsyncHome prismicCtx={props.prismicCtx}/>}/>
        <Route exact path="/:uid" render={routeProps => <AsyncPage {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/blog/:uid" render={routeProps => <AsyncPost {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/preview" render={routeProps => <AsyncPreview {...routeProps} />} />
      </Switch>
    </ScrollToTop>
  </Router>

)
export default App
