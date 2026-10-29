'use client'

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useWindowScroll } from 'react-use';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Ptitle } from '../Main/InnerTitle/InnerTItle';

import Pworlds from '../../utils/Page/Pworlds';

export const Pworld = () => {


    const [current, setCurrent] = useState(1);
    const [next, setNext] = useState(2);
    const [link, setLink] = useState(false);
    const tfRef = useRef(null);
    const tf2Ref = useRef(null);
    const router = useRouter();
    const [to, setTo] = useState(false);

    console.log(current)

    useGSAP(() => {

        if (current === 1) {
            gsap.set(".swiper-slide1", {
                scale: 1,
                xPercent: 100,
            });
            gsap.set(".swiper-slide2", {
                scale: 0.65,
                xPercent: 100,
            });

            gsap.set(".swiper-slide0", {
                scale: 0.65,
                xPercent: -200,
            });
        }
        else if (current === 2) {

            gsap.set(".swiper-slide1", {
                scale: 0.65,
                xPercent: 0,
            });
            gsap.set(".swiper-slide2", {

                scale: 1,
                xPercent: 0,
            });
            gsap.set(".swiper-slide0", {
                scale: 0.65,
                xPercent: 0,
            });
        }

        else if (current === 0) {

            gsap.set(".swiper-slide2", {
                scale: 0.65,
                xPercent: -100,
            });
            gsap.set(".swiper-slide0", {
                scale: 1,
                xPercent: -100,
            });

            gsap.set(".swiper-slide1", {
                scale: 0.65,
                xPercent: 200,
            });

        }

    }, [current])







    useGSAP(() => {

        if (link === false) {
            gsap.fromTo(".swiper-wrapper", {
                opacity: 0,
                yPercent: 150,
                scale: 0.3,
                duration: 1,
                ease: "power2.out",
            },
                {
                    scale: 1,
                    yPercent: 0,
                    opacity: 1,

                });
        } else if (link === true) {
            gsap.fromTo(".world-slide-cover", {
                duration: 0.8,
                ease: "power2.out",
            },
                {
                    scale: 1,
                    xPercent: -tf2Ref.current.offsetWidth,
                    opacity: 0,

                });

            gsap.fromTo(".world-slide-tape", {
                duration: 0.8,
                ease: "power2.out",
            },
                {
                    scale: 1,
                    xPercent: tf2Ref.current.offsetWidth,
                    opacity: 0,

                });
        }



    }, [link])






    return (
        <div className="pworld relative min-h-[calc(100vh-1rem)] mt-[1rem] bg-[url('/images/bg.123ba49.jpg')] no-repeat bg-center bg-cover bg-fixed overflow-hidden" >

            <div className="pworld-container overflow-hidden bg-[url('/images/inner-top.224793e.png')] bg-no-repeat bg-[position:0_-1rem] bg-[size:10.3rem_11.6rem]">


                {/* ================== */}
                <div className='section-nav font-impact'>
                    <div className='section-nav-inner'>

                        <Ptitle className="" title="设定档案" secondTitle="Background" num="05" />


                    </div>
                </div>
                {/* ================== */}
                <div className='pworld-section-wrap relative my-0 mx-auto w-full'>

                    <div className='pworld-inner relative pt-[1.6rem] pb-[2.26rem] px-0 h-full'>
                        {/* ================== */}

                        <div className='swiper-container w-14.4rem] h-[9.7rem] my-0 mx-auto overflow-visible'>
                            <div className='swiper-wrapper justify-center opacity-0' ref={tf2Ref}>


                                {Pworlds.map((item, index) => (
                                    <div key={index} ref={tfRef} className={


                                        current === item.id ?
                                            `swiper-slide-active swiper-slide${item.id} swiper-slide relative w-[5.32rem] h-[9.7rem]` :
                                            `swiper-slide${item.id} swiper-slide swiper-slide-none relative w-[5.32rem] h-[9.7rem] pointer-events-none`

                                    }
                                        style={{ opacity: current === item.id ? 1 : 0.6, transition: 'transform 0.3s ease-in-out' }}
                                   

                                    >
                                        <Link href={item.link}
                                            onClick={(e) => {
                                                setLink(true)
                                                
                                            }}

                                        >


                                            <div className='world-slide-container h-full'>

                                                <div className="world-slide-mask "></div>

                                                <div className='world-slide-cover' style={{ backgroundImage: `url(${item.img})` }}></div>

                                                <div className="world-slide-tape">
                                                    <div className="tape-name">

                                                        <div className="font-impact mt-[.12rem] text-[.92rem] uppercase">
                                                            <span className="text-[.78rem]">{item.ti}</span>
                                                        </div>

                                                        <div className="text-[.32rem] text-right font-extrabold font-impact"><span>{item.name}</span></div>
                                                    </div>
                                                </div>

                                            </div>

                                        </Link>
                                    </div>
                                ))}




                            </div>
                        </div>

                        {/* ================== */}

                        <div className='pworld-nav pointer-events-none'>

                            <div onClick={() => setCurrent(current === 0 ? 2 : current - 1)} className="swiper-button-prev left-[.7rem] z-[2] w-[1.36rem] h-[.94rem] mt-[-0.97rem] pointer-events-auto bg-[url('/images/pjian.png')] bg-center bg-cover hover:bg-[url('/images/pjiana.png')]" ></div>



                            <div onClick={() => setCurrent(current === 2 ? 0 : current + 1)} className="swiper-button-prev right-[.7rem] rotate-180 z-[2] w-[1.36rem] h-[.94rem] mt-[-0.97rem] pointer-events-auto bg-[url('/images/pjian.png')] bg-center bg-cover hover:bg-[url('/images/pjiana.png')]" ></div>



                        </div>

                        {/* ================== */}
                    </div>

                </div>

                {/* ================== */}
                <div className="pworld-section-footer absolute w-[9.91rem] h-[7.08rem] bottom-[1.08rem] right-[-7.7rem] z-[1] bg-[url('/images/inner-foot-dark.fb81e4b.png')] bg-no-repeat bg-center bg-cover">



                </div>
            </div>

        </div >
    )

}