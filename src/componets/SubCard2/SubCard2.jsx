import { Card } from 'antd';
import {MdArrowDropUp} from 'react-icons/md';
import "./subcard2.css";
const SubCard2 = () => (
    <Card style={{
        width: 300,
      }}>
        <div className="SubCard2" style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <p>Total Earning</p>
          <p>₹10,57,739<span><MdArrowDropUp className="my-icon-up"/> 12%</span></p>
        </div>
        <div style={{ flex: 1 }}>
          <p>Sales</p>
          <p>₹36,06,507<span ><MdArrowDropUp className="my-icon-up"/> 10%</span></p>
        </div>
      </div>
    </Card>
);
export default SubCard2;