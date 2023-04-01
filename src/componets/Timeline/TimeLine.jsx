import React from "react";
import "./timeline.css"; // Importing the styles for the timeline component

const Timeline = () => {
  return (
    <>
      {/* The container for the timeline */}
      <div class="container">
        {/* The title of the timeline */}
        <div className="txt">TIMELINE</div>
        {/* The button container */}
        <div class="button__container">
          {/* Buttons to filter the timeline */}
          <button class="button">1W</button>
          <button class="button">1M</button>
          <button class="button button--active">3M</button>
          <button class="button">1Y</button>
          <button class="button">ALL</button>
        </div>
      </div>
    </>
  );
};

export default Timeline;
