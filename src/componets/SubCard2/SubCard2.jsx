// Importing required modules
import {MdArrowDropUp} from 'react-icons/md';
import "./subcard2.css";
import data from "../Json/data.json";

// Creating functional component SubCard2
const SubCard2 = () => (


<div className="SubCard2" style={{ display: 'flex', flexDirection: 'column' }}>
{/*First content block with flex of 1*/}
<div style={{ flex: 1 }}>
<p>Total Earning</p>
{/* Displaying total earning from the data file and an icon with 12% increase*/}
<p>${data.totalEarning}<span><MdArrowDropUp className="my-icon-up"/> 12%</span></p>
</div>
 {/*Second content block with flex of 1*/}
<div style={{ flex: 1 }}>
<p>Sales</p>
{/*Displaying sales amount from the data file and an icon with 10% increase*/}
<p>${data.bsales}<span ><MdArrowDropUp className="my-icon-up"/> 10%</span></p>
</div>
</div>
// Closing the fragment
);
// Exporting the SubCard2 component
export default SubCard2;
