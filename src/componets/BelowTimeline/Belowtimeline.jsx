import React from "react";
import { TbDropCircle } from 'react-icons/tb'; // Importing the TbDropCircle icon from the 'react-icons/tb' package
import { GrView } from 'react-icons/gr'; // Importing the GrView icon from the 'react-icons/gr' package
import { BsBarChartFill } from 'react-icons/bs'; // Importing the BsBarChartFill icon from the 'react-icons/bs' package
import "./belowtimeline.css"; // Importing the styles for the below timeline component
import data from "../Json/data.json"; // Importing data from a JSON file

// The BelowTimeline component
const BelowTimeline = () => {
  return (
    <>
      {/* The container for the below timeline */}
      <div className="container__below">
        {/* The button container */}
        <div className="button__container_below">
          {/* The first widget with the TbDropCircle icon */}
          <div className="firstwidget"><TbDropCircle className="icon"/><p>Trend goods</p><span>{data.trendGoods}</span></div>
          {/* The second widget with the GrView icon */}
          <div className="Secondwidget"><GrView className="icon" /><p>Shopping views</p><span>{data.shoppingVeiws}</span></div>
          {/* The third widget with the BsBarChartFill icon */}
          <div className="Thirdwidget"><BsBarChartFill className="icon"/><p>Store dynamics</p><span>{data.trendGoods}</span></div>
        </div>
      </div>
    </>
  );
};

export default BelowTimeline;
