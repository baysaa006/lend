import React from 'react'
import {AiFillApple} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillAndroid} from 'react-icons/ai'

const side = () => {
  return (
    <div className=' side fixed left-0 top-80 w-10  h-44 bg-white rounded-r-2xl'>
        <ul className='flex  h-full flex-col items-center justify-between'>
            <li className='log'><AiFillApple/></li>
            <li className='log'><AiOutlineTwitter/></li>
            <li className='log'><AiFillAndroid/></li>
            <li className='log'><FaFacebookF/></li>
        </ul>   
    </div>
  )
}

export default side