import React from 'react';
import './A3.css';
import doc1 from "../assert/doctor1.png"
import doc2 from "../assert/doctor2.png"
import doc3 from "../assert/doctor3.png"
import doc4 from "../assert/doctor4.png"

const A3 = () => {
  return (

   <div className="A3wrapper">
<h1>Yuqumli kasalliklarni davolashda eng katta shifokorlar</h1><br />
<h3>shifokorlardan yordam oling va yuqumlik kasallik yuqishini oldini oling!</h3>
    <div className="A3-box">
      <div className="a3-text">
     
</div>
    <div className="card__collection">
      <div className="cards cards--three">
        <div className="cards--three__circle"></div>

      <img src={doc1} alt="" />

        <div className="cards--three__rect-1">
          <p>Anaesthetic</p>
          <div className="shadow-1"></div>
        </div>

        <div className="cards--three__rect-2">
          <div className="shadow-2"></div>
        </div>

        <ul className="cards--three__list">
         
          <li>D</li>
          <li>E</li>
        </ul>
      </div>
    </div>

    <div className="card__collection">
      <div className="cards cards--three">
        <div className="cards--three__circle"></div>
        <img src={doc2} alt="" />
        <div className="cards--three__rect-1">
          <p>Cardiology</p>
          <div className="shadow-1"></div>
        </div>

        <div className="cards--three__rect-2">
          <div className="shadow-2"></div>
        </div>

        <ul className="cards--three__list">
         
          <li>D</li>
          <li>E</li>
        </ul>
      </div>
    </div>


    <div className="card__collection">
      <div className="cards cards--three">
        <div className="cards--three__circle"></div>
        <img src={doc3} alt="" />
        <div className="cards--three__rect-1">
          <p>
          Orthopedic</p>
          <div className="shadow-1"></div>
        </div>

        <div className="cards--three__rect-2">
          <div className="shadow-2"></div>
        </div>

        <ul className="cards--three__list">
         
          <li>D</li>
          <li>E</li>
        </ul>
      </div>
    </div>


    <div className="card__collection">
      <div className="cards cards--three">
        <div className="cards--three__circle"></div>
        <img src={doc4} alt="" />
        <div className="cards--three__rect-1">
          <p>
          Anaesthetic</p>
          <div className="shadow-1"></div>
        </div>

        <div className="cards--three__rect-2">
          <div className="shadow-2"></div>
        </div>

        <ul className="cards--three__list">
         
          <li>D</li>
          <li>E</li>
        </ul>
      </div>
    </div>

    </div>


    </div>
  );
};

export default A3;
