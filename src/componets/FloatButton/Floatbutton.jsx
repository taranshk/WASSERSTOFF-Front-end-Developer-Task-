import { Button } from 'antd';
import { PlusOutlined, MinusOutlined,BranchesOutlined,PullRequestOutlined} from '@ant-design/icons';
import {FaRegDotCircle} from 'react-icons/fa';
import {MdOutlineLinearScale} from 'react-icons/md';
import "./floatbutton.css";
function FloatButtonn() {
  return (
    <div className="float-button-container">
      <div className='firstbtn'>
      <Button className="float-button" icon={<PlusOutlined />}  />
      <Button className="float-button" icon={<MinusOutlined />} />
      </div>
      
      <div className='thirdbtn'>
      <Button className="float-button" icon={<FaRegDotCircle />} />
      </div>
      
      <div className='secondbtn'>
      <Button className="float-button" icon={<BranchesOutlined />} />
      <Button className="float-button" icon={<MdOutlineLinearScale />} />
      <Button className="float-button" icon={<PullRequestOutlined />} />
      </div>
      {/* add more buttons as needed */}
    </div>
  );
}
export default FloatButtonn;