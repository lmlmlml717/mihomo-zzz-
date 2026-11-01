'use client'

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useWindowScroll } from 'react-use';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Ptitle } from '../Main/InnerTitle/InnerTItle';

import PnewsBanner from '@/utils/Page/PnewsBanner';
import { resolveImgUrl } from '@/utils/imgUrl';
import { Container } from 'postcss';

const tabList = [
    {
        name: '最新',
        link: '/news',

    },
    {
        name: '新闻',
        link: '/news/category?type=1',

    },
    {
        name: '公告',
        link: '/news/category?type=2',
    },
    {
        name: '活动',
        link: '/news/category?type=3',
    },

]

export const Pnews = ({ children, currentPg }) => {

     const wrapRef = useRef(null);
    const [swiperCurrent, setSwiperCurrent] = useState(0);


    const [isDragging, setIsDragging] = useState(false);

    const startXRef = useRef(0);          
    const startTranslateRef = useRef(0);   
    const [translateX, setTranslateX] = useState(0); 


    const [swiperRefLeft, setSwiperRefLeft] = useState(0);
    const [swiperRefRight, setSwiperRefRight] = useState(0);
    const [containerRefLeft, setContainerRefLeft] = useState(0);
    const [containerRefRight, setContainerRefRight] = useState(0);
    const [swiperCurrent2, setSwiperCurrent2] = useState(null);


    const swiperRef = useRef();
    const containerRef = useRef();
    const cRef = useRef();







    useGSAP(() => {

        const element = document.querySelector('.pnews-slider-item');
        const style = window.getComputedStyle(element);
        const marginR = parseFloat(style.marginRight);
        const swiperWidth = element.getBoundingClientRect().width;
        const totalWidth = swiperWidth + marginR;

        gsap.to(swiperRef.current, {
            x: -totalWidth * swiperCurrent,
            duration: 0.5,
            ease: 'power1.inOut',
        });

        setSwiperCurrent2(swiperCurrent - 6)
    }, [swiperCurrent]);



    return (
        <div className="pnews " >

            <div className="pnews-container relative mb-[1.6rem]">
                {/* ================== */}
                <div className='section-nav font-impact'>
                    <div className='section-nav-inner'>
                        <Ptitle className="" title="新闻资讯" secondTitle="Latest News" num="03" />
                    </div>
                </div>
                {/* ================== */}
                <div className='pnews-slider pt-[1.6rem] ml-[6.4rem] w-full'>
                    {/* ================== */}
                    <div className='slider-title '>
                        Latest News
                    </div>
                    {/* ================== 轮播*/}
                    <div className='swiper-content mt-[2.56rem] overflow-hidden'
                        ref={containerRef}
                    >
                        <div className='absolute w-[25.5rem] h-[3.68rem]'>


                            <div onClick={() => { if (swiperCurrent === 0) { return; } ;setSwiperCurrent(prev => prev - 1) }} className="absolute swiper-button-prev z-[10] left-[.26rem] right-auto mt-[-0.75rem] w-[.86rem] h-[1.5rem] bg-[url(/images/jian.png)] bg-no-repeat bg-center bg-[length:0.46rem_.7rem] pointer-events-auto opacity-90 hover:opacity-100" >

                            </div>


                            <div onClick={() =>{if ( swiperCurrent === 11 ) { setSwiperCurrent(-1); } setSwiperCurrent(prev => prev + 1)}} className="absolute swiper-button-next z-[10] rotate-180 left-auto right-[6.5rem] mt-[-0.75rem] w-[.86rem] h-[1.5rem] bg-[url(/images/jian.png)] bg-no-repeat bg-center bg-[length:0.46rem_.7rem] pointer-events-auto opacity-90 hover:opacity-100" >

                            </div>
                        </div>
                        <div className='swiper-wrapper ' ref={swiperRef}
                            style={{ transform: `translateX(${-translateX}px)` }}
                       >
                            {PnewsBanner.map((item, index) => (
                                <div key={index} className='pnews-slider-item swiper-slide w-[6.86rem] h-[3.68rem] mr-[.76rem] last:mr-0 overflow-hidden'>

                                    <Link href={item.link} className='news-slider-latest-img '>

                                        <img src={resolveImgUrl(item.ItemUrl)} className='w-full h-full object-cover object-center' />
                                    </Link>
                                </div>

                            ))}







                        </div>
                    </div>
                    {/* ================== */}
                    <div className=" slider-pagination relative h-[.22rem] mt-[.4rem] ml-[.5rem] w-[12.8rem]">
                        <div className="swiper-pagination top-0 w-full z-[10] leading-[.2rem] text-left">
                            {[1, 2, 3, 4, 5, 6].map((item) => {

                                

                              


                                return (
                                    <span
                                        style={{ backgroundImage: swiperCurrent === item - 1 || swiperCurrent2 === item -1 ? 'url(/images/hou.png)' : '' }}


                                        onClick={() => setSwiperCurrent(item - 1)}


                                        key={item}
                                        className='swiper-pagination-bullet cursor-pointer'

                                    />
                                );
                            })}
                        </div>
                    </div>
                    {/* ================== */}
                </div>
                {/* ================== */}
                <div className='pnews-section-wrap relative w-[12.8rem] mt-[1.45rem] ml-[6.4rem]' ref={wrapRef} >

                    {/* ================顶部Nav切换================= */}
                    <div className='news-tab' >

                        {tabList.map((item, index) =>
                            <Link href={item.link} key={index} className={currentPg === index ? 'news-tab-item news-tab-item-active' : 'news-tab-item'}>
                                <div className='h-full leading-[.64rem]'>
                                    {item.name}
                                </div>
                                <div className='news-tab-label-active'>
                                </div>
                            </Link>
                        )}
                    </div>
                    {/* ================== */}
                    {children}
                    {/* ================== */}
                </div>

                {/* ================== */}
                <div className="pnews-section-footer absolute w-[9.91rem] h-[7.08rem] bottom-[1.08rem] right-[-6.4rem] z-[1] bg-[url('/images/inner-foot.ebee1c3.png')] bg-no-repeat bg-center bg-cover">

                </div>
            </div>

        </div >
    )

}