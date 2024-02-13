import React from 'react'
import imageleft from '../assets/images/imageleft.png'
import imagerght from '../assets/images/imagerght.png'
import { Greenbtn } from '../common/Icons'

const Section_12 = () => {
  return (
    <section className=' bg-[#00141B]'>



      <div className="container max-w-[1140px] mx-auto  py-[150px] px-[12px]">

        <div className='max-w-[1140px] rounded-[16px] card border-[0.5px]   border-[#3D8655] hover:shadow-[0px_4px_15px_1px_#67E0B2] flex justify-center text-center items-center py-[104px] relative'>

          <div>
            <img src={imageleft} alt="" className='absolute left-0 top-0 bottom-0 ' />

            <img src={imagerght} alt=""  className='right-0 absolute top-0 bottom-0'/>
          </div>

          <div className='z-20 flex items-center justify-center flex-col'>

            <h3 className='text-white text-[32px] max-w-[593px] leading-[41.6px] font-normal font-Anton   text-center '>Lanza tu propia plataforma en sólo 2 semanas</h3>



            <button className="py-[13px] px-[46px] mt-[40px] relative text-black  bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_-3px#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-[700] duration-300 font-Inter text-[16px] "> <span className='absolute -bottom-2 -left-2'>
                 <Greenbtn/>
                    </span>Leer más</button>
         
          </div>

        </div>

      </div>

    </section>
  )
}

export default Section_12