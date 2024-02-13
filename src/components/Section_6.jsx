import React from 'react'
import nightcasino from '../assets/images/nightcasino.png'
import { Greenbtn } from '../common/Icons'

function Section_6() {
  return (
    <section className='backgroundpic28 lg:bg-[#03141A] bg-white'>
        <div className="container max-w-[1140px] mx-auto  px-3">
            <div className='flex flex-wrap items-center justify-center pt-[150px] lg:pt-[304px] pb-[130px]  lg:pb-[329px]'>

                <div className='lg:w-[50%] px-[12px] '>
                    <h3 className='text-black text-[48px] max-w-[339px] leading-[57.6px] font-normal font-Anton pb-[16px] '>Por qué elegirnos</h3>
                    <p className='max-w-[526px] text-[16px] leading-[25.6px] opacity-[80%] text-black font-medium font-Inter '>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>

                    <button className="py-[13px] px-[46px] mt-[40px] relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_-3px#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-[700] duration-300 font-Inter text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'>
                 <Greenbtn/>
                    </span>Aprende más</button>
                </div>

                
                <div className='lg:w-[50%] px-[12px] mt-10 lg:mt-0 '>
                    <img src={nightcasino} alt="nightcasino" className='w-full' /> 
                </div>

            </div>
        </div>
    </section>
  )
}

export default Section_6