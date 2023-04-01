// Importing the React library
import React from "react";

// Importing the CSS file for the Navigation component
import "./navigation.css";

// Importing NavLink and Outlet components from react-router-dom library
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

// Defining a constant variable named Navigation as a functional component
const Navigation = () => {
    return (
      <>
    {/* A nav element with a class name "navigation" */}
    <nav className="navigation">
      
      {/* A ul element with a class name "navigation__wrapper" */}
      <ul className="navigation__wrapper">
        
        {/* A li element with a NavLink component */}
        <li>
        <NavLink exact activeClassName="active_class" to='/'>Statistics</NavLink>
        </li>
        
        {/* A li element with a NavLink component */}
        <li>
        <NavLink exact activeClassName="active_class" to='/overview'>Overview</NavLink>
        </li>
        
        {/* A li element with a NavLink component */}
        <li>
        <NavLink exact activeClassName="active_class" to='/dashboard'>Dashboard</NavLink>
        </li>
        
        {/* A li element with a NavLink component */}
        <li>
        <NavLink exact activeClassName="active_class" to='/analitcs'>Analitcs</NavLink>
        </li>
      </ul>
    </nav>
    
    {/* Renders the child routes using Outlet component from react-router-dom */}
    <Outlet />
    
  </>
    )
 };

// Exporting the Navigation component as the default export
export default Navigation;
