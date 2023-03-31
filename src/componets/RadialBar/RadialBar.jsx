import { RadialBar } from "@ant-design/plots";
/*import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";*/
import "./radialbar.css";
const SiderRadialBar = () => {
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
  const config = {
    data,
    xField: "name",
    yField: "star",
    maxAngle: 150,
   
    radius: 0.6,
    innerRadius: 0.2,
    tooltip: {
      formatter: (datum) => {
        return {
          name: "star",
          value: datum.star
        };
      }
    },
    colorField: "star",
    color: ({ star }) => {
      if (star > 10000) {
        return "#6349ec";
      } else if (star > 1000) {
        return "#ff9300";
      }

      return "#ff93a7";
    },
    barBackground: {},
    barStyle: {
      lineCap: "round"
    },
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
  return <RadialBar {...config} />;
};

export default SiderRadialBar;