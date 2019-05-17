import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// import { Route } from 'react-router-dom'


// const Layout = ({ component: Component, prismicCtx, ...rest}) => (
//   <Route {...rest} render={routeProps =>
//     <>
//       <Navigation />
//         <Component {...routeProps} prismicCtx={prismicCtx}  />
//       <Footer />
//     </>
//   }/>
// )

const Layout = ({ children }) => (
    <>
      <Navigation />
        {children}
      <Footer />
    </>
)
export default Layout
