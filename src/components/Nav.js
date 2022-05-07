import React from 'react'

const nav = () => {
  return (
    <div id='nav' className='w-full h-16  px-2 flex flex-row bg-white  items-center fixed justify-between'>
        <img className=' h-2/5' src='https://lend.mn/image/lendmnlogo.svg' alt='logo'/>
        <ul className=' h-full flex flex-row font-sans text-sm text-zinc-500 font-semibold items-center gap-3 cursor-pointer  '>
            <li><a href='#'>ЛЭНДМН ХЭТЭВЧ</a> </li>
            <li><a href='#'>ЛЭНДМН ХУВЬЦАА</a> </li>
            <li><a href='#'>БИДНИЙ ТУХАЙ </a></li>
            <li><a href='#'>МЭДЭЭ</a> </li>
            <li><a href='#'>АЖЛЫН БАЙР</a></li>
            <li><a href='#'>ТУСЛАМЖ </a></li>
            <li><img className='w-6 h-6' src='https://lend.mn/image/eng.png' alt='eng'/> </li>
         

        </ul>

    </div>
  )
}

export default nav