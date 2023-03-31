import React from "react";
import BelowTimeline from "../BelowTimeline/Belowtimeline";
import "./timeline.css";
const Timeline = () =>{
    return(
        <>
<div class="container">
    <div className="txt">TIMELINE</div>
  <div class="button__container">
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