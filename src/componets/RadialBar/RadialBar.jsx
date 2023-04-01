// This imports the RadialBar component from the "@ant-design/plots" library.
import { RadialBar } from "@ant-design/plots";

/* This imports React, useState, useEffect, and ReactDOM.
   However, these imports are not currently being used in this file, so they have been commented out. */
// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

// This imports the "radialbar.css" file, which contains styling for this component.
import "./radialbar.css";

// This defines a functional component named SiderRadialBar.
const SiderRadialBar = () => {
  // This defines an array of objects containing data for the chart.
  const data = [
    {
      name: "G6",
      star: 0
    },
    {
      name: "Research",
      star: 7346
    },
    {
      name: "Develoment",
      star: 10178
    }
  ];

  // This defines the configuration options for the RadialBar component.
  const config = {
    data, // This sets the data for the chart.
    xField: "name", // This sets the data field used for the x-axis.
    yField: "star", // This sets the data field used for the y-axis.
    maxAngle: 150, // This sets the maximum angle of the chart.
    radius: 0.6, // This sets the outer radius of the chart.
    innerRadius: 0.2, // This sets the inner radius of the chart.
    
    // This defines the tooltip for the chart.
    tooltip: {
      formatter: (datum) => {
        return {
          name: "star",
          value: datum.star
        };
      }
    },

    // This sets the color of the bars based on the number of stars.
    colorField: "star",
    color: ({ star }) => {
      if (star > 10000) {
        return "#6349ec";
      } else if (star > 1000) {
        return "#ff9300";
      }
      return "#ff93a7";
    },

    barBackground: {}, // This sets the background of the bars.
    
    // This sets the style for the bars.
    barStyle: {
      lineCap: "round"
    },

    // This adds an annotation to the chart.
    annotations: [
      {
        type: "html",
        position: ["50%", "50%"],
        html: (container, view) => {
          const coord = view.getCoordinate();
          const w = coord.polarRadius * coord.innerRadius * 1.15;
          return `<div style="transform:translate(-50%,-46%)">
          <img width="${
            (w / 203) * 231
          }" height="${w}" alt="" src="https://gw.alipayobjects.com/zos/antfincdn/zrh%24J08soH/AntV%252520LOGO%2525202.png">
        </div>`;
        }
      }
    ]
  };

  // This returns the RadialBar component with the configuration options passed as props.
  return <RadialBar {...config} />;
};

// This exports the SiderRadialBar component so that it can be used in other files.
export default SiderRadialBar;
