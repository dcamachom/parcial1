import React from 'react';
import Header from './Header';
import Login from './login';
import Footer from './Footer';

function PageLogin(){
    return (
    <div style={{alignItems:'center'}}>
      <Header />
      <Login />
      <Footer />
    </div>
    );
}

export default PageLogin;