import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation';
import Page from './Page';
import Preview from './Preview';
import Footer from './Footer';
import Home from './Home';
import 'fontawesome';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/preview" render={routeProps => <Preview {...routeProps} />} />
            <Route exact path='/' component={Home}/>
            <Route exact path="/:uid" render={routeProps => <Page {...routeProps} prismicCtx={this.props.prismicCtx} />} />
          </Switch>
        </Router>
        <Footer/>
      </Fragment>
    );
  }
}
