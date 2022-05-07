import React from 'react'

const ashig = () => {
  return (
    <div className=' ashig flex flex-col items-center border-b border-solid border-gray-400   '>
        <h1 className='head'>ЛэндМН нийгэмд өгч буй ашиг тус</h1>
        <hr className=' hr h-2 w-48  rounded-full'/>
        <div className='content flex  mt-8 gap-3'>
            <div className='flex  flex-col items-center justify-center gap-4 '> 
                <img className='h-28' src='https://lend.mn/image/icons/tcag-01.svg'/>
                <h1> 279000</h1>
                <h3> Цаг</h3>

                <p> Нийт 93,081 харилцагчийн зээл авахад зарцуулах байсан 279,000 цаг буюу 31,8 жил хэмнэсэн</p>
            </div>
            <div className='flex  flex-col items-center justify-center  gap-4 '> 
                <img className='h-28' src='https://lend.mn/image/icons/horongo-01.svg'/>
                <h1> 1.5</h1>
                <h3> Тэрбум төгрөг</h3>

                <p> Нийт 93,081 харилцагчийн зээл авахад зарцуулах шууд бус зардал буюу 1,5 тэрбум төгрөгийг хэмнэсэн</p>
            </div>
            <div className='flex  flex-col items-center justify-center   gap-4'> 
                <img  className='h-28'src='https://lend.mn/image/icons/horongo-01.svg'/>
                <h1> 2.5</h1>
                <h3> Сая хүн</h3>

                <p> Нийт 2,5 сая хүний хооронд үүсэх байсан зээлийн харилцааг ганцхан товчоор шийдвэрлэсэн 835,110 Барьцаа</p>
            </div>
            <div className='flex  flex-col  items-center justify-center   gap-4'> 
                <img  className='h-28'src='https://lend.mn/image/icons/Asset6.svg'/>
                <h1> 835110</h1>
                <h3> Барьцаа</h3>

                <p> Нийт 93,081 харилцагчийн зээл авахад зарцуулах байсан 279,000 цаг буюу 31,8 жил хэмнэсэн</p>
            </div>

        </div>
    </div>
  )
}

export default ashig