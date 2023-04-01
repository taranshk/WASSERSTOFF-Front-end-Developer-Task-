// Import necessary modules from React and Ant Design
import React, { Component } from 'react';
import {Layout} from "antd";
import {Content, Header, Footer} from "antd/es/layout/layout";
import SubHeader from "./componets/Header/SubHeader";
import "./styles/dashboard.css";
import Dashboard from "./Pages/Dashboard";
import MenuRouter from "./Routor/Routing";

// Define a class component called App
class App extends Component {
render() {
// Return the following JSX code
return (
// Render a Layout component from Ant Design
<Layout>
{/*Render a Header component from Ant Design and a SubHeader component*/}
<Header className="header" ><SubHeader/> </Header>
{/*Render another Layout component from Ant Design */}
<Layout>
{/* Render a Content component from Ant Design and a Dashboard component */}
<Content style={{borderRadius: '73px 0px 0px 73px'}}>
<Dashboard/>
</Content>
{/*Close the second Layout component */}
</Layout>
{/*Render a Footer component from Ant Design*/}
<Footer >
{/* Render a div element with a class name of 'footer' */}
<div className='footer'>
<p>ORION DATA VISUALISATION</p>
<span>2022</span>
</div>

</Footer>

</Layout>
// Close the JSX code
);
}
}
// Export the App component as the default export
export default App;





