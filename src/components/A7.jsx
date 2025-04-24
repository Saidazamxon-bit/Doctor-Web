import React from 'react'
import "./A7.css"
import ikkibrat from "../assert/2-brat.png"
import virus from "../assert/korona.png"

const A7 = () => {
  return (
    <div className='A7-box'>
      <img className='A7-img' src={ikkibrat} alt="" /><br /><br />

      <h1>Korona virus kasalligi haqida batafsil ma'lumot</h1><br /><br />
<div className="A7-wrapper">
  <div className="virus-box">
      <img className='A7-virus' src={virus} alt="" />
      <h4 className='A7-grey-text'>by</h4>
      <h3>Xitoy</h3>
      </div>
      <div className="virus-box2">
      
      <h4 className='A7-grey-text'>Dateㅤ</h4>
      <h3>2019</h3>
      </div>
    </div>
    <div className="A7-2box">
    <h1 className='Karona2'>Karona</h1>
    </div>

    <div className="A7-uzunText">
      <h1>Koronaviruslar sutemizuvchilar va qushlarda kasalliklarni keltirib chiqaradigan RNK viruslari guruhidir. Odamlar va qushlarda ular nafas yo'llari infektsiyasini keltirib chiqaradi, ular engildan o'limga olib kelishi mumkin. Odamlardagi engil kasalliklar orasida sovuqning ba'zi holatlari (bu boshqa viruslar, asosan rinoviruslar tomonidan ham yuzaga keladi), o'limga olib keladigan navlar esa SARS, MERS va COVID-19 ni keltirib chiqarishi mumkin. Sigirlar va cho'chqalarda diareya, sichqonlarda esa gepatit va ensefalomielitni keltirib chiqaradi. Koronavirus COVID -19 228 mamlakat va hududlarga ta'sir ko'rsatmoqda. Koronaviruslar Orthocoronavirinae kenja oilasini , Coronaviridae oilasida Nidovirales va Riboviria sohasini tashkil qiladi . [3] [4] Ular musbat maʼnoli bir zanjirli RNK genomiga va spiral simmetriyadagi nukleokapsidga ega boʻlgan oʻralgan viruslardir . [5] Koronaviruslarning genom hajmi taxminan 26 dan 32 kilobazagacha oʻzgarib turadi , bu RNK viruslari orasida eng kattalaridan biridir. [6] Ularning sirtidan chiqadigan o'ziga xos to'psimon shpiklari bor elektron mikrograflar quyosh tojini eslatuvchi tasvirni yaratadi, ularning nomi shundan kelib chiqadi.</h1>
    </div>

    </div>
  )
}

export default A7