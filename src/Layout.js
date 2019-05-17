import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// import { Route } from 'react-router-dom'


// const Layout = ({ component: Component, prismicCtx, ...rest}) => (
//   <Route {...rest} render={routeProps =>
//     <>
//       <Navigation prismicCtx={prismicCtx} />
//         <Component {...routeProps} prismicCtx={prismicCtx}  />
//       <Footer prismicCtx={prismicCtx} />
//     </>
//   }/>
// )

const Layout = ({ prismicCtx, children }) => (
    <>
      <Navigation prismicCtx={prismicCtx}/>
        {children}
      <Footer prismicCtx={prismicCtx} />
    </>
)
export default Layout
