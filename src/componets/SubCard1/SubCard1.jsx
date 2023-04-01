import {BiUpArrow} from 'react-icons/bi';
import "./subcard1.css";
import SiderRadialBar from '../RadialBar/RadialBar';
import data from "../Json/data.json";

/* SubCard1 component: This component displays a Card with 
total earnings and an up arrow percentage.
the React icons BiUpArrow component, 
the SiderRadialBar component, and data from a JSON file.*/

const SubCard1 = () => (
   <> 
   <div className='subcard__container'>
     <SiderRadialBar/>
     <div className='Card__wrapper'>
     <p>Total earning</p>
     <p>${data.totalEarning} <span className='Arrow'><BiUpArrow/> 2%</span></p>
    </div>
    </div>
    </>
);

export default SubCard1;
