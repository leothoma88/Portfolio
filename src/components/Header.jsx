import React from 'react';
import Avatar from "../images/avatar.jpg"


function Header() {
  return (
    <header id="header">
    <div class="inner">
        <a href="#" class="image avatar"><img src={Avatar} alt="Avatar" /></a>
        <h1><strong>I am Strata</strong>, a super simple<br />
        responsive site template freebie<br />
        crafted by <a href="http://html5up.net">HTML5 UP</a>.</h1>
    </div>
    </header>   
    
  );
}

export default Header;


