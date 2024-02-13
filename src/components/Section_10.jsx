import React from 'react'
import BlackJack1 from '../assets/images/BlackJack1.png'
import BlackJack26 from '../assets/images/BlackJack26.webp'
import livebetting1 from '../assets/images/livebetting1.png'
import { Whitefoldline } from '../common/Icons'
import greenblub4 from '../assets/images/greenblub4.png'

const Section_10 = () => {
    return (
        <section className='bg-[#00141B] relative'>

            <div className='absolute right-0 top-[-500px] hidden lg:block '>

                <img src={greenblub4} alt="greenblub4" />

            </div>

            <div className="container max-w-[1140px] px-3 mx-auto">

                <div className='flex flex-col items-center justify-center'>
                <h3 className='text-white text-[48px] font-normal max-w-[700px] font-Anton leading-[57.6px] pt-[150px] pb-[60px] text-center '>Ellos eligieron apostar con nosotros</h3>

                </div>


               
                <div className='flex flex-wrap'>



                    <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] group  z-20 ">
                        <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                            <img src={BlackJack1} className='w-full relative' alt="BlackJack1" />
                            <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>


                                <button className="py-[13px] px-[46px]  flex items-center relative justify-center bg-transparent rounded-[41px] border-[1px] font-['inter'] sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] z-20"> <span className='absolute -bottom-2 -left-2'>
                                    <Whitefoldline />
                                </span >Jugar</button >

                            </div>
                        </div>
                    </div>


                    <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] group z-20">
                        <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                            <img src={BlackJack26} className='w-full relative' alt="BlackJack26" />
                            <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>


                                <button className="py-[13px] px-[46px]  flex items-center relative justify-center bg-transparent rounded-[41px] border-[1px] font-['inter'] sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] z-20"> <span className='absolute -bottom-2 -left-2'>
                                    <Whitefoldline />
                                </span >Jugar</button >

                            </div>
                        </div>
                    </div>


                    <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] group">
                        <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                            <img src={livebetting1} className='w-full relative' alt="ivebetting1" />
                            <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>

                                <button className="py-[13px] px-[46px]  flex items-center relative justify-center bg-transparent rounded-[41px] border-[1px] font-['inter'] sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] z-20"> <span className='absolute -bottom-2 -left-2'>
                                    <Whitefoldline />
                                </span >Jugar</button >

                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='flex flex-col items-center  justify-center'>

                         <p className='pt-[38px] text-white max-w-[883px] text-[16px] leading-[25.6px] font-Inter font-semibold  text-center  '>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
                        Ahora, la próxima apuesta está en tus manos.
                        Elige ganar. Elige exclusive game.</p>

                    </div>

                   

                
            </div>

        </section>
    )
}

export default Section_10