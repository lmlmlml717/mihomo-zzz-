'use client'

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useWindowScroll } from 'react-use';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';



import { ReactLenis } from '@studio-freight/react-lenis';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Pci from '@/utils/Page/ProlesDp';
import { resolveImgUrl } from '@/utils/imgUrl';





export const Pnav = ({ toChild }) => {


    const [currentDpIndex, setCurrentDpIndex] = useState(0);
    const [currentRoIndex, setCurrentRoIndex] = useState(0);


    const [dph, setDph] = useState();

    const [winWidth, setWinWidth] = useState();
    const [TF, setTF] = useState('');
    const [style, setStyle] = useState({
        bottom: '0',
        position: 'fixed',
    });

    const containerRef = useRef(null);  
    const itemRefs = useRef([]);         
    const [slideHeight, setSlideHeight] = useState(0);

    const campRef = useRef(null);



    const toParent = (d, r) => {
        toChild(currentDpIndex, currentRoIndex);

    }
    console.log("阵营点击子索引", currentDpIndex, "阵营点击子角色索引", currentRoIndex);


    useEffect(() => {
        toParent(currentDpIndex, currentRoIndex);
    }, [currentDpIndex, currentRoIndex])



    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setStyle({
                        bottom: '0',
                        position: 'absolute',
                        top: 'unset',

                    })
                } else {
                    setStyle({
                        bottom: '0',
                        position: 'fixed',

                    })

                }
            });
        }, {
            root: null, 
            rootMargin: '0px',
            threshold: [0, 0.5, 1] 
        });
        const target = document.querySelector('.Rootfooter');
        observer.observe(target);
    }, [])


    const setItemRef = (el, i) => {
        itemRefs.current[i] = el;
    };
    useEffect(() => {
        const first = itemRefs.current[0];
        if (!first) return;

        const update = () => {
            const h = first.getBoundingClientRect().height;
            setSlideHeight(h);
        };
        update();

        const ro = new ResizeObserver(() => update());
        ro.observe(first);

        const onWinResize = () => update();
        window.addEventListener("resize", onWinResize);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", onWinResize);
        };
    }, [Pci.length]);

    const computeTargetY = () => {
        if (!slideHeight) return 0;

        if (currentDpIndex <= 1) return 0;
        if (currentDpIndex > 1 && currentDpIndex < 11) return -slideHeight * (currentDpIndex-1);

        if (currentDpIndex === 11) return -slideHeight * 9;

    };


    useGSAP(() => {
        const y = computeTargetY();
        if (!containerRef.current) return;

        gsap.to(containerRef.current, {
            y: y,



            duration: 0.5,
            ease: 'power1.inOut',
        })



    }, [currentDpIndex])

    return (
        <div className="side-character-camp-selection fixed top-[1rem]  "
            ref={campRef}

            style={style}

        >
            <div className="swiper-container side-camp-swiper swiper-container-initialized swiper-container-vertical">

                <div className="swiper-wrapper flex-col" ref={containerRef}
                >

                    {Pci.map((item, index) => (
                        <div
                            ref={(el) => setItemRef(el, index)}
                            onClick={() => {
                                setCurrentDpIndex(item.id);
                                setCurrentRoIndex(item.dpid)
                            }}
                        className={currentDpIndex === item.id ? "side-camp-item swiper-slide swiper-slide-duplicate swiper-slide-active":"side-camp-item swiper-slide swiper-slide-duplicate"} key={index}>

                            <div className="side-camp-icon" style={{ backgroundImage: `url(${resolveImgUrl(item.sm)})` }}>

                            </div>
                            <div className="side-camp-name font-hongmeng">{item.dp}</div>

                        </div>
                    ))}


                </div>


            </div>

            <div className="side-camp-btm"><div className="side-camp-expand-btn font-hongmeng">更多阵营</div></div>
        </div>


    );

}