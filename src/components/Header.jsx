import React from 'react';
import Avatar from "../images/avatar.jpg"


function Header() {
  return (
    <header id="header">
    <div class="inner">
        <a href="#" class="image avatar"><img src={Avatar} alt="Avatar" /></a>
        <h1><strong>Hi,<br/>Im Darrell Thomas</strong><br/> Welcome<br />
        to my <br />
        website.</h1>
    </div>
    </header>   
    
  );
}

export default Header;


