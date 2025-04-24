import React from 'react'
import './A1.css'
import soat from "../assert/soat.png"
import tel from "../assert/telefon.png"
import email from "../assert/email.png"
import heal from "../assert/download.png"
import opa from "../assert/opa.png"
const A1 = () => {
  return (
    <div>
      <div className="box">
       
   <div class="wave-box">
  <div class="box-content">
<div className="box2">
    <div className="nav">
      <div className="nav1"><img src={soat} alt="" /> <h3 className='tag'>Sun-Fri (9am-5pm)</h3> </div>
      <div className="nav2"><img src={tel} alt="" /> <h3 className='tag'>+88(019)24-184 461</h3></div>
      <div className="nav3"><img src={email} alt="" /> <h3 className='tag'>shovasatkhira@gmail.com</h3></div>
    </div>
   

    <div className="nav-pasi">
      <div className="pas1"><img src={heal} alt="" /></div>
      <div className="pas2">
        <h1 className='tag'>Menyu</h1>
        <h1 className='tag'>Xizmatlar</h1>
         <h1 className='tag'>Kasalliklar</h1>  
        <h1 className='tag'>Turlari</h1> 
        <h1 className='tag'>Karona</h1>
        </div>

      <div className="pas3">
        <select class="lang-select">
  <option value="uz">UZ</option>
  <option value="eng">ENG</option>
</select>

<button className='Sign-button'>Sign up</button>

</div>
    </div>


    <div className="opa-joyi">
      <div className="opa1"><h1>Biz siz uchun shu yerdamiz va siz <br /> uchun qayg'uramiz</h1>
      <h3>yuqumlik kassalliklar yuqishini oldini oling!</h3>
      <button className='Login-button'>Ro`yhatdan o`tish</button>
      </div>
      <div className="opa2"><img src={opa} alt="" /></div>
    </div>

  </div>
  <svg class="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path fill="#ffffff" d="M0,224 C360,120 720,200 1080,280 C1260,300 1440,260 1440,320 L0,320 Z"></path>
  </svg>
</div>
</div>
</div>
    </div>
  )
}

export default A1