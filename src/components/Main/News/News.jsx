'use client'

import React, { useRef, useState, useMemo, useEffect, use } from 'react';

import Link from 'next/link';
import { gsap } from 'gsap';

import { Title } from '../InnerTitle/InnerTItle';
import { More } from '../More/More';
import New from '../../../utils/Main/New';
import { resolveImagesUrl } from '../../../utils/imgUrl';

export const News = () => {
   const [current, setCurrent] = useState(() => (Array.isArray(New) && New.length ? Number(New[0].id) : 1));

    const newTfRef = useRef(null); 
    const ctRef = useRef(null);   

    const ids = useMemo(() => (Array.isArray(New) ? New.map(n => Number(n.id)) : []), []);

  
    const activeItem = useMemo(() => {
        const byId = Array.isArray(New) ? New.find(n => Number(n.id) === Number(current)) : null;
        if (byId) return byId;
        return Array.isArray(New) ? New.find(n => Number(n.id) === 1) : null;
    }, [current]);

    const activeIndex = useMemo(() => {
        if (!Array.isArray(New)) return -1;
        const idx = New.findIndex(n => Number(n.id) === Number(current));
        if (idx >= 0) return idx;
       
        return New.findIndex(n => Number(n.id) === 1);
    }, [current]);

  
    const click = (id) => {
        const nextId = Number(id);


        setCurrent(nextId);
       
    };

    const next = () => {

        if (current < New.length) {

            setCurrent(prev => prev + 1);
        };

    };
    const prev = () => {

        if (current > 1) {

            setCurrent(prev => prev - 1);
        };

    };


    useEffect(() => {
        const Id = Number(current);
        const idx = Array.isArray(New) ? New.findIndex(n => Number(n.id) === Id) : -1;
         gsap.to(newTfRef.current, {
            x: -ctRef.current.offsetWidth * idx,

            duration: 1
        });
    }, [current]);

    const loopRef = useRef();

    useEffect(() => {
        const e = loopRef.current;
        if (e) {
            e.style.animation = 'none';
           

            e.style.animation = 'loop 15s linear infinite';
        }
    }, [current]);


  
    const safeCurrent = Number.isFinite(current) ? current : 1;

    return (
        <section className="home-section section-news" id="active3">
            <div className="relative h-[12.12rem] pt-[3.28rem]">
                <div className="relative w-[19.2rem] pt-[1.14rem] my-0 mx-auto">

                    {/* 标题 */}
                    <div className="absolute top-0 pt-[.38rem] left-[8.9rem] w-[8.45rem] h-[7.86rem] leading-1 text-[#222122] font-impact">
                        <div className="absolute right-0 pointer-events-auto bg-none text-left w-[5.24rem] pl-[.7rem]">
                            <Title  className="section-news-title" title="新闻资讯" secondTitle="latest News" num="03" />


                        </div>
                    </div>

                    <div className="news-banner relative w-[9.4rem] ml-[1.76rem]">

                        {/* 轮播区域 */}
                        <div className=" relative w-[9.4rem] h-[5.3rem] rounded-[.54rem] overflow-hidden">

                            <div className="swiper-container block w-full h-full" ref={ctRef}>
                                <div className="swiper-wrapper" ref={newTfRef}>
                                    {Array.isArray(New) && New.map((item) => (
                                        <div key={item.id} className="swiper-slide block w-full h-full">
                                            <Link href={item.link} className="block w-full h-full">
                                                <img src={resolveImagesUrl(item.ItemUrl)} className="w-full h-full object-cover object-center" />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="">
                                <div onClick={prev} className="swiper-button-prev z-[20] left-[.26rem] right-auto mt-[-0.75rem] w-[.86rem] h-[1.5rem] bg-[url(/images/jian.png)] bg-no-repeat bg-center bg-[length:0.46rem_.7rem] pointer-events-auto opacity-60 hover:opacity-100" >

                                </div>
                                <div onClick={next} className="swiper-button-next z-[20] rotate-180 left-auto right-[.2rem] mt-[-0.75rem] w-[.86rem] h-[1.5rem] bg-[url(/images/jian.png)] bg-no-repeat bg-center bg-[length:0.46rem_.7rem] pointer-events-auto opacity-60  hover:opacity-100" >


                                </div>
                            </div>
                            {/* 底部滚动文案 */}
                            <div className="absolute left-0 bottom-0 w-full h-[.58rem] leading-[.58rem] text-[.4rem] z-[2] italic text-white/50 whitespace-nowrap bg-black font-hongmeng">
                                <span className="inline-block title-loop" ref={loopRef}>

                                    {activeItem?.loop ?? ''}
                                </span>
                            </div>
                        </div>

                        {/* 简介 */}
                        <div className="mt-[.38rem] mb-[.3rem] min-h-[.76rem] text-[.24rem] px-[.2rem] py-0 leading-1 text-[#000] font-hongmeng">
                            <Link href={`/news/${activeItem?.link ?? ''}`} className="decoration-none text-[#000]">
                                <div className="font-impact">{activeItem?.date ?? ''}</div>
                                <div className="mt-[.06rem] overflow-hidden text-ellipsis">
                                    {activeItem?.title ?? ''}
                                </div>
                            </Link>
                        </div>

                        {/* 分页圆点 */}
                        <div className="news-dot relative h-[.3rem] px-[.2rem] py-0">
                            <div className="swiper-pagination h-[.3rem] w-full z-[1] leading-[.3rem] text-left">
                                {ids.map((id) => {
                                    const isActive = id === safeCurrent;
                                    return (
                                        <span
                                            key={id}
                                            className={`button-${id} swiper-pagination-bullet z-[2] ${isActive ? 'button-active cursor-pointer' : 'cursor-pointer'}`}


                                            style={
                                                isActive
                                                    ? {
                                                        backgroundImage: 'url("/images/hou.png")',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center',
                                                        backgroundSize: '100% 100%',
                                                    }
                                                    : undefined
                                            }
                                            onClick={() => click(id)}
                                        />
                                    );
                                })}
                            </div>
                        </div>

          
                        <Link href="/news" className="more absolute bottom-[-0.24rem] right-0 z-[3] ">

                            查看更多
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};