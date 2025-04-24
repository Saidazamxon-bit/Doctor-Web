
import "./A6.css"
import React from 'react';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
const formatter = value => <CountUp end={value} separator="," />;
const App = () => (
    <div className='A6-box'>
        <div className="A6-wrapper">
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Har kungi bemorlar" value={500} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic title="Bemorlarning sig'imi" value={1500} precision={2} formatter={formatter} />
    </Col>
  </Row>

  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Tajribali doktor" value={200} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic title="O`lim holati" value={15} precision={2} formatter={formatter} />
    </Col>
  </Row>
  </div>
  </div>
    
);
export default App;