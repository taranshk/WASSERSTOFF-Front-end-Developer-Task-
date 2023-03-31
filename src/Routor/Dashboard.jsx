import React from "react";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import CardHover from "../componets/Sider/Sider";
import DashboardContent from "../componets/Circle/Circle";
import BelowTimeline from "../componets/BelowTimeline/Belowtimeline";
import FloatButtonn from "../componets/FloatButton/Floatbutton";
function Dashboard (){
  return(
         <Layout >
        
            <Sider theme="light" style={{height: '60vh'}}><CardHover/></Sider>

         <Layout >
           <Content>
            <DashboardContent/>
           <BelowTimeline/>
           <FloatButtonn/>
           </Content>
         </Layout >
   
         </Layout>
);
}
export default Dashboard;