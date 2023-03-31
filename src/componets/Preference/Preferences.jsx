import React from "react";
import "./preferences.css";
import {AiOutlineUser} from 'react-icons/ai';
import {HiAdjustmentsHorizontal} from 'react-icons/hi2';
const  Preferences =()=>(
 <div className="preferences__wrapper">
   <ul>
    <li>
    <AiOutlineUser/>
    </li>
    <li>
    <HiAdjustmentsHorizontal/> 
    </li>
   </ul>
 </div>
)
export default Preferences;