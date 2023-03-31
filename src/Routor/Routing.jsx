import React from "react";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import over from "./overview";
const MenuRouter=()=>{
    return(
        <Routes>

        <Route exact path='/' component={Dashboard}/>
        <Route  path='/over' component={over}/>
        </Routes>
      
       
    );
};
export default MenuRouter();