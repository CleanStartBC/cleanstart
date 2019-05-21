import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const Layout = ({ prismicCtx, children }) => (
    <>
      <Navigation prismicCtx={prismicCtx}/>
        {children}
      <Footer prismicCtx={prismicCtx} />
    </>
)
export default Layout
