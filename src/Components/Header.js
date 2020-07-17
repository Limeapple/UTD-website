import React from 'react';
import logo from '../images/utd-logo.jpg'
export default function Header(props) {
  const { sections, title } = props;

  return (
  <nav className="nav-wrapper" style={fixedNavbar}>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/publications">Publications</a></li>
      <li><a href="/students">Students</a></li>
    </ul>
    <div style={{position:"absolute", right:20, top:5}}>
    <img src={logo} width="150" height="50" />
    </div>
  </nav>
  );
}
const fixedNavbar={
  position:"fixed",
  zIndex:2,
  display:'flex',
  justifyContent:'flex-start',
  background:"rgb(199, 91, 18)",
  width:"100%",
}
