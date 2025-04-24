import React, { useState } from 'react';
import "./A4.css"
import a1 from "../assert/A4-rasmla/A4-1.jpg"
import a2 from "../assert/A4-rasmla/A4-2.jpg"
import a3 from "../assert/A4-rasmla/A4-3.jpg"
import a4 from "../assert/A4-rasmla/A4-4.jpg"
import a5 from "../assert/A4-rasmla/A4-5.jpg"

const A4 = () => {
  const [activeTab, setActiveTab] = useState('Maymun chechak');

  const tabs = [
    'Barchasi',
    'Karona',
    'Maymun chechak',
    'Sariq kasalligi',
    'Sil kasaligi'
  ];

  const tabContents = {
    'Barchasi': <img src={a1} alt="" />,
    'Karona':  <img src={a2} alt="" />,
    'Maymun chechak':  <img src={a3} alt="" />,
    'Sariq kasalligi': <img src={a4} alt="" />,
    'Sil kasaligi': <img src={a5} alt="" />,
  };

  return (
    <>
     
      <div className="A4-box">
        <h1>Yuqumli kasalliklar haqida</h1>
        <h3>Ularning paydo bo'lgan yili, tuzalganlar soni, vafot etganlar soni</h3>
        <div className="tabs">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="tab-content">
          {tabContents[activeTab]}
        </div>
      </div>
    </>
  );
};

export default A4;
