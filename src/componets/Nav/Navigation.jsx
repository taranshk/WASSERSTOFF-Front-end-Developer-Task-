import React from "react";
import "./navigation.css";
import {NavLink} from "react-router-dom";
const Navigation = () => (
    <nav className="navigation">
      <ul className="navigation__wrapper">
        <li>
        <NavLink exact activeClassName="active_class" to='/'>Statistics</NavLink>
        </li>
        <li>
        <NavLink exact activeClassName="active_class" to='/'>Overview</NavLink>
        </li>
        <li>
        <NavLink exact activeClassName="active_class" to='/dashboard'>Dashboard</NavLink>
        </li>
        <li>
        <NavLink exact activeClassName="active_class" to='/'>Analitcs</NavLink>
        </li>
      </ul>
    </nav>
 
  
  
  );
  export default Navigation;