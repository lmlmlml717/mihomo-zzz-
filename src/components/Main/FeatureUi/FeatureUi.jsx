
import React, { act } from 'react';


import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';


import FeatureItems from '../../../utils/Main/FeatureItems';

export const FeatureUib = ({ onChange, current }) => {

   const total = FeatureItems.length ;

    const next = () => {

        const currentNum = current + 1; 
 
        const active = currentNum % total;
 
         onChange(active)

    };
    const prev = () => {

        const currentNum = current - 1 + total; 

 
        const active = currentNum % total;
 
         onChange(active)

    };


    return (
        <div className='absolute top-1/2 left-0 z-[9] translate-y-[-50%] w-full h-full pointer-events-none'>
            <div onClick={prev} className='swiper-button-prev right-auto left-[3.56rem] top-[3.22rem] mt-0 w-[.86rem] h-[1.5rem] bg-[url(/images/jian.png)] bg-no-repeat bg-center bg-[length:0.46rem_.7rem] pointer-events-auto opacity-100'>


            </div>
            <div onClick={next} className='swiper-button-next right-[4.06rem] rotate-180 top-[3.22rem] mt-0 w-[.86rem] h-[1.5rem] bg-[url(/images/jian.png)] bg-no-repeat bg-center bg-[length:0.46rem_.7rem] pointer-events-auto opacity-100'>
            </div>
        </div>
    )
}


export const FeatureUis = ({ onChange, current }) => {

    const total = FeatureItems.length ;

    const next = () => {

        const currentNum = current + 1; 
 
        const active = currentNum % total;
 
        onChange(active)

    };
    const prev = () => {

        const currentNum = current - 1 + total; 

 
        const active = currentNum % total;
 
        onChange(active)

    };

    useGSAP(()=>{
        gsap.fromTo(".ft-active",{opacity:0.2},{opacity:1,duration:0.3,ease:"power1.inOut"})

    },[current])



    return (
        <div className='absolute top-[11.22rem] right-[1.2rem] z-[9]  w-[1.82rem] h-[.76rem] rounded-[.38rem] bg-[#767678]'>

            <div onClick={prev} className='swiper-button-prev right-auto left-[.08rem] translate-y-[-50%] mt-0 w-[.84rem] h-[.6rem] bg-[url(/images/hei.png)] bg-center bg-[length:100%_100%] hover:bg-[url(/images/left.png)]'>



            </div>
            <div onClick={next} className='swiper-button-next right-[.08rem] rotate-180 left-auto translate-y-[-50%] mt-0 w-[.84rem] h-[.6rem] bg-[url(/images/hei.png)] bg-center bg-[length:100%_100%] hover:bg-[url(/images/left.png)]'>

            </div>
        </div>
    )
}
