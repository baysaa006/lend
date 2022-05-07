import React from 'react'
import {IoMdMail} from 'react-icons/io'
import {BsTelephoneFill} from 'react-icons/bs'
import {IoLocation} from 'react-icons/io5'
import {AiFillApple} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillAndroid} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'

const footer = () => {
  return (
    <div className=' foot flex flex-col items-center'>
        <div className='flex flex-row justify-between'>
        
        <div  className='sort'>
            <h6 className='font-bold'>Бидний тухай</h6>
            <p>ЛэндМН ББСБ</p>
            <p>Нээлттэй ажлын байр</p>
            <p>АНД Системс</p>
            <p>Мэдээ мэдээлэл</p>

        </div>
        <div  className='sort'>
            <h6 className='font-bold'>ЛэндМН хэтэвч</h6>
            <p>Давуу талууд</p>
            <p>Үйлчилгээний нөхцөл</p>
            <p>Тавигдах шаардлага</p>
            <p>Хэрэглэгч болох</p>

        </div>
        <div  className='sort'>
            <h6 className='font-bold'>Тусламж</h6>
            <p>Заавар видео</p>
            <p>Түгээмэл асуулт</p>
            <p>Гэрээ хийх цэгүүд</p>
            <p>Апп хувилбарын түүх</p>
            <p>Хувийн мэдээллийн бодлого</p>
            <p>“LENDPAY” үйлчилгээний нөхцөл</p>

        </div>
        <div  className='sort '>
            <h6 className='font-bold'>Холбоо барих</h6>
            <div className=' text flex items-center pt-2'>
            <IoMdMail/> <p>contact@lend.mn</p>
            </div>
            <div className=' text flex items-center pb-2'>
            <BsTelephoneFill/> <p>77070101</p>
            </div>

            <p> <IoLocation/> Улаанбаатар хот, Чингэлтэй дүүрэг, 3-р хороо, Жуулчны гудамж-34 хаягт байрлах “Pearl tower” барилга</p>

            <div className='py-1'>
             <p>/// incoming.finer.diplomats</p> 
            </div>
            <div className='py-1'>
             <p>/// эвсэж.уралдах.сүүдрэвч</p> 
            </div>
           <div >
           <p>Даваа-Баасан :</p>
            <p>Өглөө 9:00 - Орой 18:00</p>
            <p>Бямба-Ням : Амарна</p>
           </div>
            

            

        </div>
        
        </div>
        <div className='flex items-center flex-col p-3'>
        <ul className='flex  h-full flex-row items-center  p-8 gap-8'>
            <li className='log'><AiFillApple/></li>
            <li className='log'><AiOutlineTwitter/></li>
            <li className='log'><AiFillAndroid/></li>
            <li className='log'><FaFacebookF/></li>
        </ul>   
        <p>© 2016 - 2018 AND Systems tech LLC. ALL RIGHTS RESERVED</p>
        </div>
    </div>
  )
}

export default footer