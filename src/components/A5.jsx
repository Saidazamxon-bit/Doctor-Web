import React from 'react';
import { Carousel } from 'antd';
import A51 from "../assert/A5-1.jpg"
import A52 from "../assert/A5-2.jpg"
import "./A5.css"

const contentStyle = {
  margin: 0,
  height: '250px',
  lineHeight: '160px',
  background: 'white',


};
const A5 = () => (
  <>
  <div className="A5-box">
    <h1>Yuqumlik kasalliklar turlari </h1>
    <Carousel arrows infinite={false}>
      <div>
        <h3 style={contentStyle}><img className='A5-img' src={A51} alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img className='A5-img' src={A52} alt="" /></h3>
      </div>
      
    
    </Carousel>
    <br />
   </div>
  </>
);
export default A5;