import React from 'react';
import { Outlet } from 'react-router-dom';  // Dynamic
// outlet is used to render the content of nested routes.
import Header from './Header';  // Static i.e it will fixed for all pages
import Footer from './Footer';  // Static i.e it will fixed for all pages

const Main = () => {
  return (
    <div>
        <Header/>
        <Outlet />     
        <Footer />
    </div>
  )
}

export default Main