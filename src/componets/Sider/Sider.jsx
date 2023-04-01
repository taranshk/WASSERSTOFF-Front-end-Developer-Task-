// Import necessary modules from React and other components
import React from 'react';
import SubCard3 from '../SubCard3/SubCard3'
import SubCard2 from '../SubCard2/SubCard2';
import SubCard1 from "../SubCard1/SubCard1";
import "./sider.css";

// Define a functional component called CardHover
const CardHover = () => (
// Return the following JSX code

  <div className='sider__container'>
    <h1>Design faster</h1>
    <div className='SubCard__container'>
      {/* Render a SubCard1 component with a class of "subcard1__container" */}
      <SubCard1 class="subcard1__container" />
      {/* Render a SubCard2 component with a class of "subcard2__container" */}
      <SubCard2 class="subcard2__container" />
      {/* Render a SubCard3 component with a class of "subcard3__container" */}
      
    {/* Close the SubCard__container div */}
    </div>
  {/* Close the sider__container div */}
  </div>
// Close the functional component
);
// Export the CardHover component as the default export
export default CardHover;





