import React from 'react';
import SubCard3 from '../SubCard3/SubCard3'
import SubCard2 from '../SubCard2/SubCard2';
import SubCard1 from '../SubCard1/SubCard1';
import "./sider.css";
const CardHover = () => (

  <div className='SubCard__container'>
   
    <SubCard2 class="subcard2__container"  style={{height: '33%'}}/>
    <SubCard3 class="subcard3__container"  style={{height: '33%'}}/>
 </div>
  
);
export default CardHover;