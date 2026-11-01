'use client'

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useWindowScroll } from 'react-use';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Ptitle } from '../Main/InnerTitle/InnerTItle';
import { resolveImagesUrl } from '../../utils/imgUrl';
export const Pwitem = ({ bimg, h, p }) => {
    const strong = `${p}`

    const [open, setOpen] = useState(false);


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

                    <div className='detail-inner relative z-[2] w-[12.8rem] mt-[1.6rem] mx-auto pt-[1.08rem] pb-[1.42rem]'>
                        <Link href="/world" ><div className="absolute top-0 right-0 w-[1.1rem] h-[.72rem] bg-[url('/images/x.png')] bg-no-repeat bg-center bg-cover"></div></Link>


                        {/* ================== */}

                        <div className='detail-article h-[8.5rem] overflow-hidden'
                        style={{
                                height: open ? 'auto' : '8.5rem'
                            }}>

                            <div className='detail-article-banner relative w-[12.8rem] min-h-[5.6rem]'>
                                <div className="swiper-container w-full h-auto">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide w-full h-auto">


                                            <img src={resolveImagesUrl(bimg)} className='w-full ' />

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='detail-article-title mt-[.7rem] text-[.3rem] font-extrabold text-[#fff]'>
                                {h}


                            </div>

                            <div  className='detail-article-content mt-[.4rem] text-[.2rem] font-extrabold text-[#b5b5b5] leading-[.32rem]'>
                                <div className='detail-article-content-inner'>
                                    <p dangerouslySetInnerHTML={{ __html: strong }} className='whitespace-pre-wrap text-justify'>

                                        
                                    </p>

                                </div>

                            </div>


                        </div>

                        {/* ================== */}

                        <div className='detail-more mt-[.2rem] text-[.22rem] text-[#fff] cursor-pointer flex flex-row justify-center items-center'>

                            <div onClick={() => setOpen(!open)} className='detail-more-button font-hongmeng'>
                                {open ? '收起' : '查看更多'}
                            </div>


                        </div>

                        {/* ================== */}
                    </div>

                </div>

                {/* ================== */}
                <div className="pworld-section-footer absolute w-[9.91rem] h-[7.08rem] bottom-[1.08rem] right-[-7.7rem] z-[1] bg-[url('/images/inner-foot-dark.fb81e4b.png')] bg-no-repeat bg-center bg-cover">



                </div>
            </div>

        </div >
    );
}

