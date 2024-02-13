import React from 'react' 
import pocker from '../assets/images/pocker.png'
import avtar  from '../assets/images/avtar.png'
import greenblub11 from '../assets/images/greenblub11.png'
import greenblub13 from '../assets/images/greenblub13.png'
import greenblub22 from '../assets/images/greenblub22.png'

function Section_2() {
  return (
   <section className='bg-[#00141B]  py-[74px] relative '>

    <div className='absolute bottom-[-580px] right-0 z-0 '>
        <img src={greenblub22} alt="greenblub22" />
    </div>

    <div className='absolute top-[280px] left-[500px] z-0 animate-pulse'>
        <img src={greenblub13} alt="greenblub13" />

    </div>

    <div className='absolute top-[-400px] left-0 z-0 '>
        <img src={greenblub11} alt="greenblub11" />
    </div>
    <div className="container max-w-[1140px] px-3 mx-auto  ">
        <div className='flex flex-wrap '>
            <div className='lg:w-[50%] w-full px-[12px] z-10 '>
                <img src={pocker} alt="pocker"  className='w-full'/>
                <div>
                    <h2 className='text-[#fff] text-[48px] font-normal pt-[60px] font-Anton leading-[57.6px] pb-[16px] '>Nuestra Visión</h2>
                    <p className='text-[16px] text-[white] opacity-[80%] leading-[25.6px] font-medium pb-[24px] font-Inter'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>

                    <p className='text-[#7AF57A] text-[16px] font-bold pt-[24px] cursor-pointer leading-[25.6px] font-Inter '>Aprende más --</p>
                </div>

            </div>


            <div className='lg:w-[50%] w-full px-[12px] '>
               
                <div>
                    <h2 className='text-[#fff] text-[48px] font-normal pt-[60px] font-Anton leading-[57.6px] pb-[16px] '>Nuestra Visión</h2>
                    <p className='text-[16px] text-[white] opacity-[80%] leading-[25.6px] font-medium pb-[24px] font-Inter '>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>

                    <p className='text-[#7AF57A] text-[16px] font-bold pt-[24px] cursor-pointer leading-[25.6px] pb-[60px] font-Inter'>Aprende más --</p>
                </div>

                <div className='z-15'>
                <img src={avtar} alt="avtar"  className='w-full'/>
                </div>

                

            </div>

        </div>

    </div>
   </section>
  )
}

export default Section_2