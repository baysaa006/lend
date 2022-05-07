import React from 'react'

const medee = () => {
  return (
    <div className=' medee flex flex-col items-center   '>
        <h1 className='head'>ЛэндМН нийгэмд өгч буй ашиг тус</h1>
        <hr className=' hr h-2 w-48  rounded-full'/>
        <h6>Гар утасны аппликейшн ашиглан зээл авах, төлбөр төлөх, орлого хүлээн авах
            хамгийн хялбар төлбөрийн хэрэгсэл юм.</h6>
            <a  className='vid h-96 w-96' >
                
            </a>
            <div className='content flex  mt-8 gap-3'>
            <div className='flex card flex-col items-center justify-center gap-4 '> 
                <img className='h-28' src='https://lend.mn/image/icons/Asset4.svg'/>
                
                <h3> Aмархан бас шуурхай.. 24/7</h3>

                <p> ЛэндМН аппликейшнаас илгээсэн зээлийн хүсэлтийг 5 минутын дотор шийдэж, зээлийг дансанд шилжүүлнэ.</p>
            </div>
            <div className='flex card flex-col items-center justify-center  gap-4 '> 
                <img className='h-28' src='https://lend.mn/image/icons/Asset7.svg'/>
                
                <h3> Уян хатан</h3>

                <p> Нэг удаад 50,000-аас 2 сая хүртэлх төгрөгийн зээлийг 30 хүртэл хоногийн хугацаатай авах боломжтой.

</p>
            </div>
            <div className='flex card flex-col items-center justify-center   gap-4'> 
                <img  className='h-28'src='https://lend.mn/image/icons/Asset6.svg'/>
                
                <h3> Барьцаагүй, хүүгүй</h3>

                <p>Зээлийн хэмжээндээ тохирсон сарын шимтгэл төлөөд барьцаагүй, хүүгүй зээл авна.</p>
            </div>
            <div className='flex card flex-col  items-center justify-center   gap-4'> 
                <img  className='h-28'src='https://lend.mn/image/icons/Asset5.svg'/>
                <h3> Урамшууллын оноо</h3>

                <p> Хугацаандаа хийсэн эргэн төлөлт тутамд танд бонус оноо бэлэглэнэ.</p>
            </div>

            
        </div>

        <div className="btn   "> <a href="product.html" type="a" >Дэлгэрэнгүй</a> </div>

        <div className="container  mt-4">
        
            <div class="flex flex-row justify-content-around p-10 justify-between">
                             
                <div class="col-xs-6">
                    <a href="https://medium.com/@blackboxvc/google-for-entrepreneurs-and-blackbox-celebrate-10th-batch-of-global-startups-selected-for-silicon-c9a7a1b3642c#722b" target="_blank"><img src="https://lend.mn/image/features/blackbox.png" /></a>
                </div>
                <div class="col-xs-6">
                    <a href="https://goo.gl/CdHnrt" target="_blank"><img src="https://lend.mn/image/features/forbes.png"/></a>
                </div>
                <div class="col-xs-6">
                    <a href="http://www.dw.com/en/founders-secrets-lendmn/av-40176022" target="_blank"><img src="https://lend.mn/image/features/deutschewelle.png" /></a>
                </div>
                <div class="col-xs-6">
                    <a href="https://www.techinasia.com/and-global-seed" target="_blank"><img src="https://lend.mn/image/features/techinasia.png" /></a>
                </div>
                <div class="col-xs-6">
                    <a href="https://goo.gl/giPCfa" target="_blank"><img src="https://lend.mn/image/features/bloombergmongolia.png" /></a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default medee