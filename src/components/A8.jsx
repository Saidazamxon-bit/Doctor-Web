import React from 'react'
import "./A8.css"
import heal from "../assert/download.png"
import tel from "../assert/telefon.png"
import email from "../assert/email.png"




export const A8 = () => {
  return (
    <div className='A8-box'>
        <div className="a8-1">
        <img className='A8-heal' src={heal} alt="" /><br /><br />
        <h2>10 New Town Street, V2</h2>
        <h2>5NW, Newstate, USA.</h2><br />
<div className="a8-2">
        <img src={tel} alt="" />
        <h2>+88(019)24-184 461</h2>
        </div>

        <div className="a8-3">
        <img src={email} alt="" />
        <h2>shovasatkhira@gmail.com</h2>
        </div>
        </div>

        <div className="a8-wr">
            <h1 className='a8-t'>Quvvatlash</h1>
            <a className='linklar' href="https://termify.io/privacy-policy-generator?gclid=Cj0KCQjw2MWVBhCQARIsAIjbwoMMqx_5BYY9IGdA06ILIMkAB326rMtj-iquLkmdVjbsjKQV2jsnpNUaAttSEALw_wcB">
                <h2>Maxfiylik siyosati</h2>
            </a>
            <a className='linklar' href="https://termify.io/privacy-policy-generator?gclid=Cj0KCQjw2MWVBhCQARIsAIjbwoMMqx_5BYY9IGdA06ILIMkAB326rMtj-iquLkmdVjbsjKQV2jsnpNUaAttSEALw_wcB">
                <h2>Cookie Policy</h2>
                <h2>Purchasing Policy</h2>
            </a>
        </div>
        <div className="a8-wr1">
            <h1 className='a8-t'>Menyu</h1>
            <a className='linklar' href="">
                <h2>Menyu</h2>
            </a>
            <a className='linklar' href="">
                <h2>Xizmatlar</h2>
                <h2>Kasalliklar</h2>
                <h2>Turlari</h2>
                <h2>Karona</h2>
            </a>
        </div>

        <div className="a8-wr1">
            <h1 className='a8-t'>Kontakt</h1>
            <a className='linklar' href="https://termify.io/privacy-policy-generator?gclid=Cj0KCQjw2MWVBhCQARIsAIjbwoMMqx_5BYY9IGdA06ILIMkAB326rMtj-iquLkmdVjbsjKQV2jsnpNUaAttSEALw_wcB">
                <h2>Bosing</h2>
            </a>
            <a className='linklar' href="https://termify.io/privacy-policy-generator?gclid=Cj0KCQjw2MWVBhCQARIsAIjbwoMMqx_5BYY9IGdA06ILIMkAB326rMtj-iquLkmdVjbsjKQV2jsnpNUaAttSEALw_wcB">
                <h2>FAQ</h2>
                
            </a>
        </div>
        
    </div>
  )
}
