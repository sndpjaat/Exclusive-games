import React from 'react'
import logo from '../assets/images/logo.png'

import greenblub from '../assets/images/greenblub.png'
import greenblub2 from '../assets/images/greenblub2.png'
import { Facebok, Gmail, Instagram, Phonecall, linkdin } from '../common/Icons'

const Footer = () => {

    return (
        <section className=' bg-black overflow-hidden relative '>

            <div className='absolute left-0 bottom-0 animate-pulse hidden lg:block'>
                <img src={greenblub2} alt="greenblub2" />

            </div>

            <div className='  absolute right-0  animate-pulse hidden lg:block'>
                <img src={greenblub} alt="greenblub" />

            </div>
            <div className="container mx-auto px-3 max-w-[1140px]">
                <div className="flex flex-wrap -mx-3 pt-[64px] pb-[40px] z-10">
                    <div className=" w-full lg:w-[41.66%] px-3 z-10">
                        <img src={logo} alt="footer-logo" />
                        <p className=' max-w-[369px] font-Inter font-[500] leading-[25.6px] text-[16px] pt-4 pb-6 text-white opacity-[80%]'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</p>
                        <div className="flex gap-[12px]">
                            <Instagram />
                            <Facebok />
                            <span><svg width="32" className=' cursor-pointer' height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="16" fill="#FEFEFE" fill-opacity="0.16"/>
<path d="M9.14352 7C8.60247 7 8.08359 7.21493 7.70102 7.5975C7.31844 7.98008 7.10352 8.49896 7.10352 9.04C7.10352 9.58104 7.31844 10.0999 7.70102 10.4825C8.08359 10.8651 8.60247 11.08 9.14352 11.08C9.68456 11.08 10.2034 10.8651 10.586 10.4825C10.9686 10.0999 11.1835 9.58104 11.1835 9.04C11.1835 8.49896 10.9686 7.98008 10.586 7.5975C10.2034 7.21493 9.68456 7 9.14352 7ZM7.22352 12.76C7.19169 12.76 7.16117 12.7726 7.13866 12.7951C7.11616 12.8177 7.10352 12.8482 7.10352 12.88V25.36C7.10352 25.4262 7.15728 25.48 7.22352 25.48H11.0635C11.0953 25.48 11.1259 25.4674 11.1484 25.4449C11.1709 25.4223 11.1835 25.3918 11.1835 25.36V12.88C11.1835 12.8482 11.1709 12.8177 11.1484 12.7951C11.1259 12.7726 11.0953 12.76 11.0635 12.76H7.22352ZM13.4635 12.76C13.4317 12.76 13.4012 12.7726 13.3787 12.7951C13.3562 12.8177 13.3435 12.8482 13.3435 12.88V25.36C13.3435 25.4262 13.3973 25.48 13.4635 25.48H17.3035C17.3353 25.48 17.3659 25.4674 17.3884 25.4449C17.4109 25.4223 17.4235 25.3918 17.4235 25.36V18.64C17.4235 18.1626 17.6132 17.7048 17.9507 17.3672C18.2883 17.0296 18.7461 16.84 19.2235 16.84C19.7009 16.84 20.1587 17.0296 20.4963 17.3672C20.8339 17.7048 21.0235 18.1626 21.0235 18.64V25.36C21.0235 25.4262 21.0773 25.48 21.1435 25.48H24.9835C25.0153 25.48 25.0459 25.4674 25.0684 25.4449C25.0909 25.4223 25.1035 25.3918 25.1035 25.36V17.0848C25.1035 14.7549 23.0779 12.9328 20.7595 13.143C20.0422 13.2083 19.3395 13.3859 18.6773 13.6691L17.4235 14.2067V12.88C17.4235 12.8482 17.4109 12.8177 17.3884 12.7951C17.3659 12.7726 17.3353 12.76 17.3035 12.76H13.4635Z" fill="#FEFEFE"/>
</svg>

                            </span>

                        </div>
                    </div>
                    <div className=" w-full lg:w-[58.33%] px-3 z-10">
                        <div className="flex flex-wrap -">
                            <div className=" w-full sm:w-[50%] lg:w-[33.33%] md:px-3 mt-6 lg:mt-0">
                                <h4 className=' font-Inter font-[700] leading-[25.6px] pt-[10px] pb-4 text-[16px] text-white'>Menú principal</h4>
                                <ul className='flex flex-col gap-[14px]'>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Hogar</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Misión</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Tragamonedas</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Por qué elegirnos</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Ofertas</a></li>
                                </ul>
                            </div>
                            <div className=" w-full sm:w-[50%] lg:w-[33.33%] md:px-3 mt-6 lg:mt-0 flex flex-col flex-wrap">
                                <h4 className=' font-Inter font-[700] leading-[25.6px] pt-[10px] pb-4 text-[16px] text-white'>Atención al cliente</h4>
                                <ul className='flex flex-col gap-[14px]'>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>¿Necesitas ayuda?</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>política de privacidad</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Términos de servicios</a></li>
                                </ul>
                            </div>
                            <div className=" w-full sm:w-[50%] lg:w-[33.33%] md:px-3 mt-6 lg:mt-0">
                                <h4 className=' font-Inter font-[700] leading-[25.6px] pt-[10px] pb-4 text-[16px] text-white'>Ponerse en contacto</h4>
                                <div className=" flex items-center gap-[10px]">

                                    <span><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.668 0.333008H2.33464C1.41797 0.333008 0.676302 1.08301 0.676302 1.99967L0.667969 11.9997C0.667969 12.9163 1.41797 13.6663 2.33464 13.6663H15.668C16.5846 13.6663 17.3346 12.9163 17.3346 11.9997V1.99967C17.3346 1.08301 16.5846 0.333008 15.668 0.333008ZM15.3346 3.87467L9.44297 7.55801C9.1763 7.72467 8.8263 7.72467 8.55964 7.55801L2.66797 3.87467C2.58441 3.82777 2.51123 3.76439 2.45288 3.68839C2.39452 3.61238 2.35219 3.52532 2.32845 3.43248C2.30471 3.33964 2.30005 3.24295 2.31477 3.14826C2.32948 3.05357 2.36325 2.96285 2.41404 2.88159C2.46482 2.80033 2.53157 2.73022 2.61024 2.6755C2.68891 2.62079 2.77786 2.5826 2.87171 2.56326C2.96557 2.54391 3.06237 2.54381 3.15626 2.56296C3.25016 2.58212 3.33919 2.62012 3.41797 2.67467L9.0013 6.16634L14.5846 2.67467C14.6634 2.62012 14.7524 2.58212 14.8463 2.56296C14.9402 2.54381 15.037 2.54391 15.1309 2.56326C15.2247 2.5826 15.3137 2.62079 15.3924 2.6755C15.471 2.73022 15.5378 2.80033 15.5886 2.88159C15.6394 2.96285 15.6731 3.05357 15.6878 3.14826C15.7025 3.24295 15.6979 3.33964 15.6742 3.43248C15.6504 3.52532 15.6081 3.61238 15.5497 3.68839C15.4914 3.76439 15.4182 3.82777 15.3346 3.87467Z" fill="white" />
                                    </svg>
                                    </span>


                                    <p className=' font-Inter text-wrap  text-white cursor-pointer text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>juegosexclusivos@gmail.com</p>
                                </div>
                                <div className=" flex items-center gap-[10px] pt-3">

                                    <Phonecall />


                                    <p className=' font-Inter text-white text-[16px]  cursor-pointer leading-[25.5px] font-[500] opacity-[80%] '>(101)342-7873</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-[1px] bg-[#191919] "></div>
            <p className=' text-[16px] cursor-pointer text-center font-Inter font-[500] leading-[25.6px] py-[20px] text-white opacity-[50%] '>© Juegos exclusivos - Todos los derechos reservados 2023</p>
        </section>
    )
}

export default Footer