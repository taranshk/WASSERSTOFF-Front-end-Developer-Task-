// Importing Button component from antd library
import { Button } from 'antd';

// Importing Ant Design and React icons
import { PlusOutlined, MinusOutlined, BranchesOutlined, PullRequestOutlined } from '@ant-design/icons';
import { FaRegDotCircle } from 'react-icons/fa';
import { MdOutlineLinearScale } from 'react-icons/md';

// Importing the CSS file
import "./floatbutton.css";

// Defining a function named FloatButtonn
function FloatButtonn() {
  return (
    // A div container with a class name "float-button-container"
    <div className="float-button-container">
      
      {/* A div container with a class name "firstbtn" */}
      <div className='firstbtn'>
        {/* A Button component with the PlusOutlined icon */}
        <Button className="float-button" icon={<PlusOutlined />} />
        
        {/* A Button component with the MinusOutlined icon */}
        <Button className="float-button" icon={<MinusOutlined />} />
      </div>
      
      {/* A div container with a class name "thirdbtn" */}
      <div className='thirdbtn'>
        {/* A Button component with the FaRegDotCircle icon */}
        <Button className="float-button" icon={<FaRegDotCircle />} />
      </div>
      
      {/* A div container with a class name "secondbtn" */}
      <div className='secondbtn'>
        {/* A Button component with the BranchesOutlined icon */}
        <Button className="float-button" icon={<BranchesOutlined />} />
        
        {/* A Button component with the MdOutlineLinearScale icon */}
        <Button className="float-button" icon={<MdOutlineLinearScale />} />
        
        {/* A Button component with the PullRequestOutlined icon */}
        <Button className="float-button" icon={<PullRequestOutlined />} />
      </div>
      
      {/* Add more buttons as needed */}
    </div>
  );
}

// Exporting the FloatButtonn function as the default export
export default FloatButtonn;
