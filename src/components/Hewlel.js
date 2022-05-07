import React from 'react'

const Hewlel = () => {
  return (
    <div className=' medee flex flex-col items-center p-4  '>
        <h1 className='head'>Хэвлэлийн мэдээ</h1>
        <hr className=' hr h-2 w-48  rounded-full'/>
        <h6>Лэндмн-ийн сүүлийн үеийн мэдээллүүд</h6>
        <div className='hevlel flex justify-between items-center w-full h-full p-2'>
        <div className='card'> 
          <img  className="zur"src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPiFg78XMIMyyHf2W-jxTbZy8hb-NJgm_VZWeFwY7IC9Ec8HlLkbhMTkOeeDSeQcUeY7e3cvKUDLRQNOY8XDZ1L9kb58Rtj1dIunAucr8b-xVIXcArgeWEFOF1PZTbFFbB7I_YSvR7K5mDTbu9uX9gjHckooDYUjKZaRNqnzr2tAE3J-4sYKfDL5cZ6Q/s16000/Nogdol-ashig.jpg'/>
          <h5> "ЛэндМН ББСБ" ХК 2021 оны ногдол ашгаа хувьцаа эзэмшигчдийн данса ...</h5>
          <h6>2022-04-29</h6>
          <button className='unsh'>Цааш унших</button>
        </div>
        <div  className='card'>
        <img  className="zur"src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdcJBfgxAR9h1ek5w9U89SteLIxGnuSUVOetudqEWhkEe9IY7tgbiSR5tok8O6rmungAqvRvdoe3RSle4tzPUq5xxwcOiBb02_01IvAq4bDXjDAPteAXWPLjEHx4-ufjfnzzn8dis-QBwzAr-hCgVpAwryiD6ijp7xBanBI41YOvm4s702mYjLnpwVlQ/s16000/Q1%202022.png'/>
          <h5> “ЛэндМН ББСБ” ХК-ийн 2022 оны 1-р улирлын санхүү, үйл ажиллагаан ...</h5>
          <h6>2022-04-29</h6>
          <button className='unsh'>Цааш унших</button>
        </div>
        <div  className='card'>
        <img  className="zur"src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOvUiMxhpRzX6xcHaCjZ1J81CbA2okwcfGI8coevPWVrKnOu50C5hGXh9NoTuPplhO4WxKFXhVc9qc3hxNMMPgY04jPomGs0o7I7VJ_by49_khKBWx7c-htrnNpmyI3mtVeN5pPvNvEPbIEvj3yXTmrftG3Ru80c-kQHztQQ_BoXzDPGe-SKDgvmR8fw/s16000/Bosson-Bond-Cover.jpg'/>
          <h5> Дижитал хөрөнгө оруулалт “ЛэндБонд” хөтөлбөрийн Транч II-ын хүрээ ...</h5>
          <h6>2022-04-29</h6>
          <button className='unsh'>Цааш унших</button>
        </div>
        </div>
        <div className="btn   "> <a href="product.html" type="a" ></a>Мэдээ </div>
        
    </div>
  )
}

export default Hewlel