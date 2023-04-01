// Importing the React library
import React from "react";

// Importing the Circle.css file
import "./Circle.css";

// Importing the Timeline and Bubbles components
import Timeline from "../Timeline/TimeLine";
import Bubbles from "../Bubble/bubble";

// Defining a function named DashboardContent
function DashboardContent() {

  // Returning JSX
  return (
    <>
      {/* A container1 div */}
      <div class="container1">
        
        {/* A parent div */}
        <div class="parent">
          
          {/* A timeline__header div with a Timeline component */}
          <div class="timeline__header">
            <Timeline />
          </div>
          
          {/* A child div with a Bubbles component */}
          <div class="child">
            <Bubbles />
          </div>
        </div>
      </div>
    </>
  );
}

// Exporting the DashboardContent function as the default export
export default DashboardContent;
