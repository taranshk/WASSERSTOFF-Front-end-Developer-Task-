import React from "react";
import {TbDropCircle} from 'react-icons/tb';
import {GrView} from 'react-icons/gr';
import {BsBarChartFill} from 'react-icons/bs';
import "./belowtimeline.css";
const BelowTimeline = () =>{
    return(
        <>
<div className="container__below">
  <div className="button__container_below">
    <div className="firstwidget"><TbDropCircle className="icon"/><p>Trend goods</p><span>204</span></div>
    <div className="Secondwidget"><GrView className="icon" /><p>Shopping views</p><span>65,540</span></div>
    <div  className="Thirdwidget"><BsBarChartFill className="icon"/><p>Store dynamics</p><span>324</span></div>
  </div>
</div>
        </>
    );
};
export default BelowTimeline;