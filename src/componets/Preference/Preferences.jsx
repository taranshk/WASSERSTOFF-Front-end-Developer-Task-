// Import the React library
import React from "react";

// Import the stylesheet for the Preferences component
import "./preferences.css";

// Import the required icons from the react-icons library
import {AiOutlineUser} from 'react-icons/ai';
import {HiAdjustmentsHorizontal} from 'react-icons/hi2';

// Declare the Preferences component as a functional component
const Preferences =()=>(

  // Render the component's HTML elements
  <div className="preferences__wrapper">
    <ul>
      <li>
        <AiOutlineUser/>  {/*Render the AiOutlineUser icon*/}
      </li>
      <li>
        <HiAdjustmentsHorizontal/>  {/*Render the HiAdjustmentsHorizontal icon*/}
      </li>
    </ul>
  </div>
)

// Export the Preferences component for use in other parts of the application
export default Preferences;
