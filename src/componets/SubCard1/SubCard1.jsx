import { Card } from 'antd';
import {BiUpArrow} from 'react-icons/bi';
import "./subcard1.css";
import SiderRadialBar from '../RadialBar/RadialBar';
const SubCard1 = () => (
    <Card    style={{
        width: 300,
      }}>
     <SiderRadialBar/>
     <div className='Card__wrapper'>
     <p>Total earning</p>
     <p>₹10,57,739 <span className='Arrow'><BiUpArrow/> 2%</span></p>
    </div>
    </Card>
);
export default SubCard1;