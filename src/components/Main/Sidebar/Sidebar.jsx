
import React from 'react';



import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);
export const Sidebar = ({ clickIndex,
     onNext, onPrev, prev, currentIndex }) => {

    useGSAP(() => {
        if (typeof document !== 'undefined') {
            const target = document.getElementById(`active${clickIndex + 1}`);
            if (target) {

                if (clickIndex === 0) {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }
                else if (clickIndex === 1) {
                   target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'

                    });
                    } else {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'

                    });
                }
            };



           
        }

    }, [clickIndex])

   

    return (
        <aside className="fixed top-[3.2rem] right-0 z-[100] w-[.82rem] h-[3.58rem] rounded-l-[0.15rem] rounded-r-none border-[0.05rem] border-r-0 border-l-[#646464] border-t-[#646464] border-b-[#646464] bg-[#0a0a0a] overflow-hidden">
            <div className="relative z-[2] mx-0 my-auto h-[2.4rem] pt-[.2rem] pr-0 pb-[.2rem] pl-[.14rem] flex flex-col justify-between items-start">
                <div onClick={onPrev} className={`${
                    currentIndex === 0 ? 'bg-[url(/images/shangx.png)]' : 'bg-[url(/images/shang.png)]'} w-[.36rem] h-[.46rem] cursor-pointer bg-[position:0_0] bg-[size:100%_100%]`}>







                </div>
                <div onClick={onNext} className={`${
                    currentIndex === 4
                        ? 'bg-[url(/images/shangx.png)]' : 'bg-[url(/images/shang.png)]'} w-[.36rem] h-[.46rem]  cursor-pointer bg-[position:0_0] bg-[size:100%_100%] scale-y-[-1]`}>


                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-[2.3rem] leading-none overflow-visible">
                <ul style={{
                    transform: `translateY(${-(
                        prev === -1 ? 0 : prev + 1) * 2.12
 }rem)`
                }} className={`sidebar absolute top-0 left-[.1rem] transition-transform duration-300 ease-in`}>



                    {["01", "02", "03", "04", "05"].map((item, index) => (
                        <li key={index} style={{
                            color: `${
                                 prev + 1 === index


                                    ? '#d8fa00' : ' '} `, transition: 'transform all 0.3s ease-in'
                        }} className={` h-[1.8rem] my-[.32rem] mx-auto text-[.48rem] text-center [writing-mode:vertical-rl] text-white cursor-pointer font-[Impact]`}>





                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>


    )
}