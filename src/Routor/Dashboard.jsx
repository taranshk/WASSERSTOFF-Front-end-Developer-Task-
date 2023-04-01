// Import necessary modules from React and Ant Design
import React from "react";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

// Import necessary components
import CardHover from "../componets/Sider/Sider";
import DashboardContent from "../componets/Circle/Circle";
import BelowTimeline from "../componets/BelowTimeline/Belowtimeline";
import FloatButtonn from "../componets/FloatButton/Floatbutton";

// Define a functional component called Dashboard
const Dashboard =()=>{
// Return the following JSX code
return (
<Layout >
{/* Render a Sider component from Ant Design with a theme of "light" */}
<Sider theme="light" style={{ minWidth: 301 }}>
  <CardHover />
</Sider>
{/* Render a Layout component from Ant Design */}
<Layout >
{/* Render a Content component from Ant Design */}
<Content>
{/* Render a DashboardContent component */}
<DashboardContent/>
{/* Render a BelowTimeline component */}
<BelowTimeline/>
{/* Render a Floatbutton component */}
<FloatButtonn/>
</Content>
{/* Close the Layout component */}
</Layout >
{/* Close the Layout component */}
</Layout>
// Close the functional component
)
};
// Export the Dashboard component as the default export
export default Dashboard;
