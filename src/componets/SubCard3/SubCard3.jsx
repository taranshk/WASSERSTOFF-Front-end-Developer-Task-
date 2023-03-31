import { Table } from 'antd';
import {MdArrowDropUp} from 'react-icons/md';
import {MdArrowDropDown} from 'react-icons/md';
import "./subcard3.css";
const { Column, ColumnGroup } = Table;
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
const SubCard3 = () => (
  <Table dataSource={data} className="my-table" pagination={false} >
    <ColumnGroup >
      <Column  dataIndex="title" key=" title" />
      <Column  dataIndex="lastYear" key="lastYear" />
      <Column  dataIndex="PresentYear" key="PresentYear" />
      <Column  dataIndex="icon" key="icon"  />
    </ColumnGroup>
  </Table>
);
export default SubCard3;