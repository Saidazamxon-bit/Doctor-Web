import React from 'react'
import "./A2.css"
import kitob from "../assert/kitob.png"
import odam from "../assert/yulduzo.png"
import operator from "../assert/apera.png"
import yure from "../assert/yure.png"
import qon from "../assert/qongiro.png"
import ikkitort from "../assert/ikki.png"

const A2 = () => {
  return (
    <div>
        <div className="box3">
            
            <h1 className='xizmat-tak'>Bizning eng yaxshi xizmatlarimizni taqdim etadi</h1><br /><br />
            <h4>Sizlar uchun xizmatlarimiz</h4>

           
                
            <div class="container">

               
                
  <a class="card1" href="#">
    <img  className='xiz-img1' src={kitob} alt="" />
    <div className="rt">
    <h1 className='xiz-t'>Onlayn bron qilish</h1>
    <h2 className='xiz-t1'>Sizga xizmat qilish nafaqat bizning vazifamiz, balki ishtiyoqdir.</h2>
    </div>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        
      </div>
    </div>
  </a>

  <a class="card1" href="#">
  <img className='xiz-img' src={odam} alt="" />
  <div className="rt">
  <h1 className='xiz-t'>Malakali shifokorlar</h1>
    <h2 className='xiz-t1'>Sizga xizmat qilish nafaqat bizning vazifamiz, balki ishtiyoqdir.</h2>
    </div>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        
      </div>
    </div>
  </a>
  

  <a class="card1" href="#">
  <img className='xiz-img' src={operator} alt="" />
  <div className="rt">
  <h1 className='xiz-t'>Shaxsiy yordam</h1>
    <h2 className='xiz-t1'>Sizga xizmat qilish nafaqat bizning vazifamiz, balki ishtiyoqdir.</h2>
    </div>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        
      </div>
    </div>
  </a>
  

  <a class="card1" href="#">
  <img className='yure1' src={yure} alt="" />
  <div className="rt">
  <h1 className='xiz-t'>Yaxshi g'amxo'rlik</h1>
    <h2 className='xiz-t1'>Sizga xizmat qilish nafaqat bizning vazifamiz, balki ishtiyoqdir.</h2>
    </div>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        
      </div>
    </div>
  </a>
  

  <a class="card1" href="#">
  <img className='xiz-img' src={qon} alt="" />
  <div className="rt">
  <h1 className='xiz-t'>Favqulodda yordam kerak</h1>
    <h2 className='xiz-t1'>Sizga xizmat qilish nafaqat bizning vazifamiz, balki ishtiyoqdir.</h2>
    </div>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        
      </div>
    </div>
  </a>
  

  <a class="card1" href="#">
  <img className='xiz-img' src={ikkitort} alt="" />
  <div className="rt">
  <h1 className='xiz-t'>24 soat xizmat ko'rsatish</h1>
    <h2 className='xiz-t1'>Sizga xizmat qilish nafaqat bizning vazifamiz, balki ishtiyoqdir.</h2>
    </div>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        </div>
      </div>
      </a>
    </div>
    
    </div>
  
  

  </div>
            
   
  )
}

export default A2