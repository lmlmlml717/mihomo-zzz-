'use client'

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useWindowScroll } from 'react-use';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Links from '../../../utils/Main/Links';
import { Container } from 'postcss';

import Img from '/public/images/share.png';


gsap.registerPlugin(ScrollTrigger);

const Nav = ({ item, className }) => {

    const pathname = usePathname();
    const isActive = pathname === item.link || pathname.startsWith(item.link + '/');

    const [isSubVisible, setSubVisible] = useState(0);
    const subRef = useRef(null);
    const wrapRef = useRef(null);
    const containerRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const hiddenRef = useRef(null);

    useEffect(() => {
        return () => {
            if (hiddenRef.current) {
                clearTimeout(hiddenRef.current);
            }
        };
    }, []);

    const handleEnter = () => {
        if (hiddenRef.current) clearTimeout(hiddenRef.current);
        setIsOpen(true);
    };

    const handleLeave = () => {
        hiddenRef.current = setTimeout(() => setIsOpen(false), 250);
    };


    const onClickRecharge = () => {

        setIsOpen(false);
    };

    const onClickCommunity = () => {

        setIsOpen(false);
    };



    return (
        item.id === 1 ?
            (
                <div>
                    <a href={item.link}  className={`h-[1rem] text-[0.2rem] font-bold text-[#787878] relative pt-[0.28rem] ${item.id === 1 ? '' : className} `}>

                        <div className={`${isActive ? 'bg-white text-black scale-[1.12]' : ''} w-full h-[.44rem] rounded-[1.2rem] px-[.1rem] min-w-[1.24rem] cursor-pointer text-center scale-100 transition-all duration-500 flex flex-row justify-center items-center hover:bg-white hover:text-black hover:scale-[1.12]`}>
                            <span className="relative top-[0.02rem] ">{item.name}</span>
                        </div>
                    </a>
                </div>)
            : item.id < 5 || item.id === 6 ?
                (<Link href={item.link} passHref className={`h-[1rem] text-[0.2rem] font-bold text-[#787878] relative pt-[0.28rem] ${item.id === 1 ? '' : className} `}>

                    <div className={`${isActive ? 'bg-white text-black scale-[1.12]' : ''} w-full h-[.44rem] rounded-[1.2rem] px-[.1rem] min-w-[1.24rem] cursor-pointer text-center scale-100 transition-all duration-500 flex flex-row justify-center items-center hover:bg-white hover:text-black hover:scale-[1.12]`}>
                        <span className="relative top-[0.02rem] ">{item.name}</span>
                    </div>
                </Link>)
                :
                (<div className={`h-[1rem] text-[0.2rem] font-bold text-[#787878] relative pt-[0.28rem] ${className}`} ref={containerRef} >




                    {item.id === 5 ?
                        (<div
                            ref={wrapRef}
                            className=""
                            onMouseEnter={handleEnter}
                            onMouseLeave={handleLeave}
                        >
                            {/* 触发器：更多 */}
                            <div
                                className="nav-content-more w-full h-[.44rem] rounded-[1.2rem] px-[.1rem] min-w-[1.24rem] cursor-pointer text-center scale-100 transition-all duration-500 flex flex-row justify-center items-center "

                            >
                                <span className="relative top-[0.02rem]">{item.name}</span>
                            </div>

                            {/* 子菜单 */}
                            <div
                                role="menu"
                                aria-hidden={!isOpen}
                                className={`nav-content-sub 
                                ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
                            >
                                <Link target='_blank' href="https://space.bilibili.com/39281371?spm_id_from=333.1007.0.0"
                                    className="nav-content-sub-item nav-content-sub-item-link "
                                    role="menuitem"
                                    onClick={onClickRecharge}
                                >
                                    <span>充值</span>
                                </Link>
                                <Link target='_blank' href="https://space.bilibili.com/39281371?spm_id_from=333.1007.0.0"

                                    className="nav-content-sub-item nav-content-sub-item-link "
                                    role="menuitem"
                                    onClick={onClickCommunity}
                                >
                                    <span>社区</span>
                                </Link>
                            </div>
                        </div>) :
                        (
                            <>
                                <div className=" w-full h-[.44rem] rounded-[1.2rem] px-[.1rem] min-w-[1.24rem] cursor-pointer text-center scale-100 transition-all duration-500 flex flex-row justify-center items-center bg-[#d8fa00] text-[#000000] ">
                                    <span className="relative top-[0.02rem] ">{item.name}</span>
                                </div>




                            </>
                        )

                    }
                </div >





                )
    );
}

export const Header = ({ }) => {

    const headerRef = useRef(null);
 
    const [isLogoBig, setLogoBig] = useState('hidden');
    const [isLogoSm, setLogoSm] = useState('');


    return (
        <header className="fixed top-0 left-0 w-full h-4 bg-black justify-center items-center z-[100]" ref={headerRef}>

            <div className="flex w-[19.2rem] h-full justify-between items-center px-[0.56rem] mx-[auto]">

                {/* ======================左 */}
                <div className="flex items-center">
                    {/* =======================大小logo */}
                    <div className="header_logo relative w-[2.3rem] h-[0.54rem] leading-0 shrink-0 cursor-pointer">
                        <img src="/images/logo.1e072ee.png" className={`logo-big mt-[0.08rem] origin-top-left  ${isLogoBig}`} />

                        <img src="/images/logo-sm.1b88313.svg" className={`logo-sm w-auto h-[0.54rem] absolute top-0 left-0 ${isLogoSm}`} />

                    </div>
                    {/* ========================跳转 */}
                    <div className="heaser_link flex items-center">
                        {Links.map((item, index) => (
                            item.id < 6 ? <Nav key={index} item={item} className={`ml-[.4rem]`} /> : null

                        ))}
                    </div>

                </div>
                {/* ================================右 */}
                <div className="flex items-center justify-end h-full white-space-nowrap">
                    <div className="flex justify-start items-center h-full ml-[.62rem]">
                        {/* ======================== */}
                        {Links.map((item, index) => (
                            item.id > 5 ? <Nav key={index} item={item} className={`mr-[.4rem]`} /> : null
                        ))}

                        {/* ======================== 音乐*/}
                        <div className="relative cursor-pointer w-[.58rem] h-[.58rem]" >
                            <img src="/images/下载.png" className="m-audio-player_icon" />
                        </div>
                        {/* ======================== 分享*/}
                        <div className="h-full ml-[.52rem]" >
                            <div className="relative flex items-center h-full" >
                                <div className="w-[.58rem] h-[.58rem] bg-[position:0_0] bg-[size:100%_100%] bg-[url(/images/share.png)] cursor-pointer" >


                                </div>
                            </div>

                        </div>
                        {/* ========================登录 */}
                        <div className="h-full ml-[.38rem]" >
                            <div className=" h-full" >
                                <div className="relative flex items-center h-full" >
                                    <div className="w-[.58rem] h-[.58rem] bg-[url(/images/user.png)] bg-center bg-contain cursor-pointer" >



                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>



            </div>

        </header>
    );
}