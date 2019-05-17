import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import Layout from './Layout';
import { AsyncHome, AsyncPage, AsyncPreview, AsyncPost } from './components/async';

const Main = props =>

    <Switch>
      <Route exact path='/' render={() => <AsyncHome prismicCtx={props.prismicCtx}/>}/>
      <Route exact path="/:uid" render={routeProps => <AsyncPage {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/blog/:uid" render={routeProps => <AsyncPost {...routeProps} prismicCtx={props.prismicCtx} />} />
      {/* <Layout exact path='/' component={AsyncHome} prismicCtx={props.prismicCtx}/>
      <Layout exact path="/:uid" component={AsyncPage} prismicCtx={props.prismicCtx} />
      <Layout exact path="/blog/:uid" component={AsyncPost} prismicCtx={props.prismicCtx} /> */}
      <Route exact path="/preview" render={routeProps => <AsyncPreview {...routeProps} />} />

    </Switch>


export default Main
