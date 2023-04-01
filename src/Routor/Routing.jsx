// Import necessary modules from React and React Router
import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

import Navigation from "../componets/Nav/Navigation";

// Define a functional component called MenuRouter
const MenuRouter=()=>{
return(
// Render a BrowserRouter component from React Router
<BrowserRouter>
{/* Render a Routes component from React Router */}
<Routes>
{/* Render a Route component from React Router with a path of '/' and an element of Navigation */}
<Route path="/" element={<Navigation/>}>
{/* Render a Route component from React Router with an index and an element of Dashboard */}
<Route index element={<Dashboard/>}/>
{/* Render a Route component from React Router with a path of '/overview' and an element of over */}
<Route path="/overview" element={<over/>}/>
{/* Render a Route component from React Router with a path of '/analytics' and a component of commingsoon*/}
<Route path='/analytics' component={<commingsoon/>}/>
{/* Close the first Route component */}
</Route>
{/* Close the Routes component */}
</Routes>
{/* Close the BrowserRouter component */}
</BrowserRouter>
// Close the functional component
);
}
// Export the MenuRouter component as the default export
export default MenuRouter();
