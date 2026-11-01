'use client'
import React from 'react';
import { useEffect, useState, useRef, useMemo } from 'react';
import Link from 'next/link';


import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import { Title } from '../InnerTitle/InnerTItle';
import Banner from '../../../utils/Main/Banner';
import { resolveImgUrl } from '../../../utils/imgUrl';


export const World = () => {

    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(0);


    const swiperRef = useRef(null);
    const ctRef = useRef(null);
    const slideRef = useRef(null);


    const total = Banner.length;
    console.log("total", current)

    const Next = () => {


        const currentNum = current + 1;

        const active = currentNum % total;

         setCurrent(active)
        setPrev(prevId);

    }

    const Prev = () => {

        const currentNum = current - 1 + total;


        const active = currentNum % total;
        console.log("c", active)

        setCurrent(active)
        setPrev(prevId);

    }

    const currrentId = Banner.find(item => item.id === current);
    const prevId = Banner.findIndex(item => item.id === current);


    useGSAP(() => {
        console.log("current", current)

        if (current === 8 || current === 0) {

            current === 0 ? gsap.set(swiperRef.current,{x:0}) : gsap.set(swiperRef.current,{x:-ctRef.current.offsetWidth * 8})
 
        } 
        else {
            gsap.to(swiperRef.current, {
                x: -ctRef.current.offsetWidth * current,
                duration: 1,

            });
        }


    }, [current])





    return (
        <section className="home-section section-world " id="active5">
            <div className="relative h-[10.64rem] pt-[2rem]">
                {/* ===============================左*/}

                <div className="relative w-[19.2rem] pt-[1.12rem] my-0 mx-auto">
                    {/* ==========================文字 */}
                    <div className="absolute top-0 pt-[.38rem] left-[8.9rem]  w-[8.45rem] h-[7.86rem]">
                        <div className="absolute right-0 pointer-events-auto bg-none text-left w-[5.24rem] pl-[.7rem] text-[left]">
                            <Title className="section-w-title" title="设定档案" secondTitle="Background" num="05" />

                        </div>
                    </div>

                    {/* ========================== 轮播 */}

                    <div className="w-banner relative w-[9.4rem] h-[5.3rem] ml-[1.76rem] ">
                        <div className="swiper-container relative w-full h-full overflow-hidden rounded-[.32rem]" ref={ctRef}>
                            <div className="swiper-wrapper" ref={swiperRef} >

                                {Banner.map((item, index) => (
                                    <div className={`swiper-slide relative w-[9.4rem] h-[5.3rem] block`

                                      
                                    } key={item.id} ref={slideRef}>

                                        <Link href="/world" className="w-full h-full object-cover" >
                                            <img className="w-full h-full object-cover object-center" src={resolveImgUrl(item.bannerUrl)} />
                                        </Link>

                                    </div>
                                ))}

                            </div>

                            {/* ========================== 前*/}

                            <div onClick={Prev} className="swiper-button-prev left-[.26rem] right-auto mt-[-0.75rem] w-[.86rem] h-[1.5rem] bg-[url(/mihomo-zzz-/images/jian.png)] bg-no-repeat bg-center bg-[length:0.46rem_.7rem] pointer-events-auto opacity-70 hover:opacity-100" >
                            </div>
                            {/* ========================== 后*/}

                            <div onClick={Next} className="swiper-button-next rotate-180 left-auto right-[.2rem] mt-[-0.75rem] w-[.86rem] h-[1.5rem] bg-[url(/mihomo-zzz-/images/jian.png)] bg-no-repeat bg-center bg-[length:0.46rem_.7rem] pointer-events-auto opacity-70 hover:opacity-100" >
                            </div>

                        </div>
                    </div>
                    {/* ========================== 轮播end*/}

                </div>
                {/* ==========================左end */}

                {/* ===============================右 */}
                <div className="absolute w-[6.67rem] h-[2.37rem] bottom-[1.1rem] right-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url(/mihomo-zzz-/images/concept-nav.7bc3606.png)] bg-no-repeat bg-[length:100%_100%]">
                        <a target="_blank" href="https://space.bilibili.com/39281371?spm_id_from=333.1007.0.0" className="decoration-none">

                            <div className="relative z-[2] flex flex-col items-end justify-center w-[3.47rem] h-full pr-[.35rem] text-[.46rem] leading-[1] text-right text-[#07040b]">
                                <div style={{ fontFamily: 'inpin-hongmengti' }} >概念站</div>

                                <div style={{ fontFamily: 'inpin-hongmengti' }} className="text-[.14rem] mt-[.04rem]">跳转回顾</div>
                            </div>

                            <div className="absolute top-[.2rem] left-[-1.68rem] w-[3.18rem] h-[1.86rem] ">
                                <div className="mt-[.18rem] ml-[.18rem] w-[2.14rem] h-[1.5rem] bg-[#fff]">
                                    <img className="w-full h-full object-cover object-center" src={`/mihomo-zzz-/images/6360987773eec96ad06bd5037979034a_7429561287467471877.gif`} />
                                </div>
                                <div className="top-0 left-0 w-full h-full absolute bg-[url(/mihomo-zzz-/images/concept-tv.8242ab6.png)] bg-no-repeat bg-[length:100%_100%]"></div>
                                <div className="top-1/2 left-[.9rem] z-[3] w-[.7rem] h-[.7rem] absolute bg-[url(/mihomo-zzz-/images/zan.png)] bg-no-repeat bg-[length:100%_100%] translate-y-[-50%]"></div>

                            </div>

                        </a>

                    </div>

                </div>
            </div>
        </section>
    )
}
