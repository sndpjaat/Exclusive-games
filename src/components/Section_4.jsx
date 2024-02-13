import React from 'react'
import image1 from '../assets/images/image1.png'
import jackjhone from '../assets/images/jackjhone.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'
import flyover from '../assets/images/flyover.png'
import downflyover from '../assets/images/downflyover.png'
import backgroundpic25 from '../assets/images/backgroundpic25.png'
import { Greenbtn, Greenfan, Greenligt, Sudhchkr, Whitefoldline } from '../common/Icons'




function Section_4() {
    return (
        <section className='backgroundpic30 lg:bg-[#00141B] bg-white '>

            <div className="container max-w-[1140px] mx-auto px-3 ">

                <div className=" flex items-center justify-center">
                    <h3 className='text-black text-[48px] max-w-[552px] leading-[57.6px] pt-[200px] font-Anton font-normal text-center '>Nuestros Atributos de Marca</h3>
                </div>
                <div className='flex flex-wrap items-center  -mx-3 md:pt-[60px] pt-[20px] pb-[20px] sm:pb-[75px]  justify-center relative'>

                    <div className='absolute top-[80px] left-[250px] hidden lg:block'>
                        <img src={flyover} alt="flyover" />
                    </div>

                    <div className='absolute top-[110px] right-[230px] hidden lg:block '>
                        <img src={downflyover} alt="downflyover" />
                    </div>



                    <div className='lg:w-[33.33%] md:w-[50%] w-full  px-3  flex flex-col items-center'>
                        <div className=' card  flex flex-col items-center '>
                            <Greenligt />
                            <h2 className='text-black text-center text-[20px] leading-[25px] font-normal pt-[16px] '>Inteligencia</h2>
                            <p className='max-w-[263px] text-center opacity-[80%] font-medium text-[16px] leading-[25.6px] pt-[10px] text-black '>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                        </div>
                    </div>


                    <div className='lg:w-[33.33%] md:w-[50%] w-full px-3  flex flex-col items-center'>
                        <div className='card  flex flex-col items-center'>
                            <Greenfan />
                            <h2 className='text-black text-center text-[20px] leading-[25px] font-normal pt-[16px] '>Inteligencia</h2>
                            <p className='max-w-[263px] text-center opacity-[80%] font-medium text-[16px] leading-[25.6px] pt-[10px] text-black '>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                        </div>
                    </div>

                    <div className='lg:w-[33.33%] md:w-[50%] w-full px-3  flex flex-col lg:items-end'>
                        <div className='card flex flex-col items-center'>
                            <Sudhchkr />
                            <h2 className='text-black text-center text-[20px] leading-[25px] font-normal pt-[16px] '>Inteligencia</h2>
                            <p className='max-w-[263px] text-center opacity-[80%] font-medium text-[16px] leading-[25.6px] pt-[10px] text-black '>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                        </div>
                    </div>

                </div>


            </div>
            <div className="container max-w-[1140px] mx-auto px-3 ">
                <div className='flex text-center items-center justify-center flex-wrap flex-col'>
                    <h2 className='text-[black] max-w-[96px] text-center text-[48px] font-normal font-Anton pb-[16px]'>Slots </h2>
                    <p className='max-w-[904px]   text-[16px] text-black font-medium '>En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                </div>
                <div className='flex flex-wrap pt-[60px]'>


                    <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] group">
                        <div className=' relative flex overflow-hidden  mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9] '>
                            <img src={image1} className='w-full relative' alt="image_1" />
                            <div className=' absolute left-[-100%] group-hover:left-0  bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-300'>
                                <button className="py-[13px] px-[46px]  flex items-center relative justify-center bg-transparent rounded-[41px] border-[1px] font-['inter'] duration-300 sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] z-20"> <span className='absolute -bottom-2 -left-2'>
                                    <Whitefoldline />
                                </span >Jugar</button >
                            </div>
                        </div>
                    </div>


                    <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] group">
                        <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                            <img src={jackjhone} className='w-full relative' alt="image_1" />



                            <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-300'>
                                <button className="py-[13px] px-[46px]  flex items-center relative justify-center bg-transparent rounded-[41px] border-[1px] font-['inter'] sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] z-20"> <span className='absolute -bottom-2 -left-2'>
                                    <Whitefoldline />
                                </span >Jugar</button >
                            </div>
                        </div>
                    </div>


                    <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] group">
                        <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                            <img src={image3} className='w-full relative' alt="image_1" />
                            <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>

                                <button className="py-[13px] px-[46px]  flex items-center relative justify-center bg-transparent rounded-[41px] border-[1px] font-['inter'] sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] z-20"> <span className='absolute -bottom-2 -left-2'>
                                    <Whitefoldline />
                                </span >Jugar</button >

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap pt-[24px]'>

                    <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] group">
                        <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                            <img src={image4} className='w-full relative' alt="image_1" />
                            <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>

                                <button className="py-[13px] px-[46px]  flex items-center relative justify-center bg-transparent rounded-[41px] border-[1px] font-['inter'] sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] z-20"> <span className='absolute -bottom-2 -left-2'>
                                    <Whitefoldline />
                                </span >Jugar</button >


                            </div>
                        </div>
                    </div>



                    <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] group">
                        <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                            <img src={image5} className='w-full relative' alt="image_1" />
                            <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>

                                <button className="py-[13px] px-[46px]  flex items-center relative justify-center bg-transparent rounded-[41px] border-[1px] font-['inter'] sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] z-20"> <span className='absolute -bottom-2 -left-2'>
                                    <Whitefoldline />
                                </span >Jugar</button >

                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[33.33%] md:w-[50%] max-lg:pt-[24px] w-full px-[12px] group">
                        <div className=' relative flex overflow-hidden mx-w-[365px] w-full border border-transparent rounded-[8px] group-hover:border-[#64ddb9]'>
                            <img src={image6} className='w-full relative' alt="image_1" />
                            <div className=' absolute left-[-100%] group-hover:left-0 bg-black  bg-opacity-[72%] max-w-[365px] w-full max-h-[264px] h-full flex items-center justify-center duration-500'>

                                <button className="py-[13px] px-[46px]  flex items-center relative justify-center bg-transparent rounded-[41px] border-[1px] font-['inter'] sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] z-20"> <span className='absolute -bottom-2 -left-2'>
                                    <Whitefoldline />
                                </span >Jugar</button >

                            </div>
                        </div>
                    </div>



                </div>

                <div className='flex items-center justify-center md:pb-[243px] pb-[70px]'>

                    <button className="py-[13px] px-[46px] mt-[40px] relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_-3px#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-[700] duration-300 font-Inter text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'>
                        <Greenbtn />
                    </span>Mostrar más</button>

                </div>



            </div>
        </section>
    )
}

export default Section_4