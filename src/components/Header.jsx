import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import pocker from '../assets/images/pocker.png'
import avtar from '../assets/images/avtar.png'
import { Greenbtn, Whitefoldline } from '../common/Icons'

const Header = () => {
    const [data,setdata] = useState(false);
function view (){setdata(!data)
if(data === false){
    document.body.classList.add("Navslide");
}
else{
    document.body.classList.remove("Navslide")
}
}
    return (
        <header className='bg-black bg-img min-h-screen bg-no-repeat flex flex-col bg-center bg-cover'>
            <nav className='bg-white bg-opacity-[10%] flex  '>
                <div className="container mx-auto px-3 max-w-[1140px]">

                    <div className='flex py-[24px] justify-between '>
                        <img src={logo} alt="logo" />
                        <ul className= {`${data ? "right-0":"right-[-100%]"} flex items-center  justify -between z-[50] gap-[20px] max-lg:fixed  max-lg:bg-[#00141B] max-lg:w-full max-lg:h-full max-xl:top-0  max-lg:flex-col max-lg:justify-center duration-500`}>
                            <li><a href="#" className='text-[white] text-[16px] font-medium leading-[25.6px] font-Inter'>Hogar</a></li>
                            <li><a href="#" className='text-[white] text-[16px] font-medium leading-[25.6px] font-Inter'>Misión</a></li>
                            <li><a href="#" className='text-[white] text-[16px] font-medium leading-[25.6px] font-Inter'>Tragamonedas</a></li>
                            <li><a href="#" className='text-[white] text-[16px] font-medium leading-[25.6px] font-Inter'>Por qué elegirnos</a></li>
                            <li><a href="#" className='text-[white] text-[16px] font-medium leading-[25.6px] font-Inter'>Ofertas</a></li>
                        </ul>
                        <div className='flex items-center gap-[30px]'>

                            <button className="py-[13px] font-[700] hidden  px-[46px] relative md:block sm:flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                                <Whitefoldline />
                            </span >Acceso</button >

                            <div onClick={view} className="menuicon lg:hidden block z-50 ">
                                <span className="bar h-[3px] block bg-white w-[25px] duration-300"></span>
                                <span className="bar h-[3px] block  bg-white w-[25px] my-[6px]"></span>
                                <span className="bar h-[3px] block  bg-white w-[25px]  duration-300"></span>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
            <div className="container max-w-[1140px] mx-auto px-3 pt-[140px] ">
        <div className='flex justiy-center pt-[70px] md:pt-[140px] pb-[70px] md:pb-[140px] flex-col items-center '>
          <h3 className='text-[white] font-normal md:text-[72px] text-[50px]  pb-[40px] max-w-[505px] leading-[86.4px] font-Anton'>Exclusive Games. Pasión por ganar</h3>
          <h1 className='text-[white] font-medium text-[16px] text-center leading-[25.6px] opacity-[80%] max-w-[727px] font-Inter pt-[16px] '>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</h1>
          <button className="py-[13px] px-[46px] mt-[40px] relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_-3px#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-[700] duration-300 font-Inter text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'>
            <Greenbtn/>
                    </span>Empezar</button>
        </div>
      </div>
        </header>
    )
}


export default Header