import logo from "./logo.png";
import React from 'react';

function Header (){
    return (
        <div>
          <h1>TuSegundazo.com</h1>
          <img src={logo} alt="logo" style={{width:'1244px',height:'323px',marginBottom:'34px',margin: '0 auto'}} />
          <hr style={{ margin: '20px 0', width:'1244.02px'}} />
        </div>
      );
}

export default Header;