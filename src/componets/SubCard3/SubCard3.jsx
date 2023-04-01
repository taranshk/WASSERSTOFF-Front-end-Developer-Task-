// Importing necessary components and styles
import { Table } from 'antd';
import { MdArrowDropUp } from 'react-icons/md';
import { MdArrowDropDown } from 'react-icons/md';
import "./subcard3.css";

// Destructuring Column and ColumnGroup from Table
const { Column, ColumnGroup } = Table;

// Defining an array of data for the table
const data = [
  {
    key: '1',
    title: 'Travel',
    lastYear: '760 ',
    PresentYear: '2,540',
    icon: <MdArrowDropUp className="my-icon-up"/> ,
  },
  {
    key: '2',
    title: 'Presentation',
    lastYear: '650',
    PresentYear: '2,304',
    icon: <MdArrowDropDown className="my-icon-down"/> ,
  },
  {
    key: '3',
    title: 'Business',
    lastYear: '612',
    PresentYear: '2,140',
    icon: <MdArrowDropUp className="my-icon-up"/> ,
  },
];

// Defining the SubCard3 component
const SubCard3 = () => (
  // Rendering a Table component with data and classNames
  <Table dataSource={data} className="my-table" pagination={false} >
    {/* Defining a ColumnGroup to group Columns */}
    <ColumnGroup >
      {/* Defining a Column for the 'title' property */}
      <Column  dataIndex="title" key=" title" />
      {/* Defining a Column for the 'lastYear' property with a className */}
      <Column  className='lasty' dataIndex="lastYear" key="lastYear" />
      {/* Defining a Column for the 'PresentYear' property */}
      <Column  dataIndex="PresentYear" key="PresentYear" />
      {/* Defining a Column for the 'icon' property */}
      <Column  dataIndex="icon" key="icon"  />
    </ColumnGroup>
  </Table>
);

// Exporting the SubCard3 component for use in other parts of the application
export default SubCard3;
