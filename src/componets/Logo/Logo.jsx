// Importing the React library
import React from "react";

// Importing the CSS file for the Logo component
import "./logo.css";

// Defining a constant variable named Logo as a functional component that takes in a prop called "src"
const Logo = ({ src }) => (
  
    // A div element with a class name "logo"
    <div className="logo">
      
      {/* An image element with a source URL and alt text */}
      <img src={"https://www.thewasserstoff.com/images/logo-top.png"} alt="Logo" width="20px" height="20px" />
      
      {/* A text saying "WASSERSTOFF" */}
      WASSERSTOFF
    </div>
  );

// Exporting the Logo component as the default export
export default Logo;
