import {Layout} from "antd";
import {Content, Header, Footer} from "antd/es/layout/layout";
import SubHeader from "./componets/Header/SubHeader";
import "./styles/dashboard.css";
import Dashboard from "./Routor/Dashboard";

const App = () => {
  return (
    <Layout>
     <Header className="header"><SubHeader/>  </Header>
    <Layout>
   
    <Content> 
          <Dashboard/>
    </Content>
  
    </Layout>
    <Footer style={{ textAlign: 'left' }}>ORION DATA VISUALISATION</Footer>
    </Layout>
 
  );
};

export default App;
