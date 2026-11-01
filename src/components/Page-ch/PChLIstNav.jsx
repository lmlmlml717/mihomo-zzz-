'use client'

import { useEffect, useState, useRef, useCallback, useMemo, useLayoutEffect } from 'react';

import { useWindowScroll } from 'react-use';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';



import { ReactLenis } from '@studio-freight/react-lenis';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Pci from '@/utils/Page/ProlesDp';
import PdpRoles from '@/utils/Page/PdpRoles';
import { resolveImagesUrl } from '@/utils/imgUrl';




export const PChNav = ({ dpRoLists = [], activeId, onChange }) => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    const [sizes, setSizes] = useState({ container: 0, content: 0 });
    const [offset, setOffset] = useState(0); 


 


   const waitImages = useCallback(async () => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;
        const imgs = Array.from(wrapper.querySelectorAll("img"));
        if (imgs.length === 0) return;
        await Promise.all(
            imgs.map(img => {
                if (img.complete) return Promise.resolve();
                return new Promise(res => img.addEventListener("load", res, { once: true }));
            })
        );
    }, []);

   const measure = useCallback(() => {
        const c = containerRef.current;
        const w = wrapperRef.current;
        if (!c || !w) return;
        const container = c.clientWidth;
        const content = w.scrollWidth;
        setSizes(prev => (prev.container === container && prev.content === content) ? prev : { container, content });
    }, []);

    useLayoutEffect(() => {
        let alive = true;
        (async () => {
            await waitImages();
            if (!alive) return;
            await new Promise(requestAnimationFrame);
            if (!alive) return;
            measure();
        })();
        return () => { alive = false; };
    }, [waitImages, measure, dpRoLists]); 

    useEffect(() => {
        const c = containerRef.current;
        const w = wrapperRef.current;
        if (!c || !w) return;

        const ro1 = new ResizeObserver(measure);
        const ro2 = new ResizeObserver(measure);
        ro1.observe(c);
        ro2.observe(w);

        const onWin = () => measure();
        window.addEventListener("resize", onWin);

        return () => {
            ro1.disconnect();
            ro2.disconnect();
            window.removeEventListener("resize", onWin);
        };
    }, [measure]);

    const { canScroll, maxScroll, step } = useMemo(() => {
        const container = sizes.container || 0;
        const content = sizes.content || 0;
        const can = content > container;
        return {
            canScroll: can,
            maxScroll: can ? content - container : 0,
            step: container || 0,
        };
    }, [sizes]);

    useEffect(() => {
        setOffset(prev => canScroll ? Math.max(0, Math.min(prev, maxScroll)) : 0);
    }, [canScroll, maxScroll]);

    useLayoutEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;
        gsap.to(el, {
            x: -offset,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto",
        });
    }, [offset]);

    const nudge = useCallback((dir) => {
        if (!canScroll || step <= 0) return;
        setOffset(prev => Math.max(0, Math.min(prev + dir * step, maxScroll)));
    }, [canScroll, step, maxScroll]);



    return (
        <div className="cha-pagination-multi">
            <div onClick={() => nudge(-1)}
                className="cha-pagination-arrow cha-pagination-arrow-left"
                style={{ display: canScroll ? "block" : "none" }} />
            <div className="swiper-container cha-pagination-swiper swiper-container-initialized swiper-container-horizontal" ref={containerRef}>

                <div className="swiper-wrapper" ref={wrapperRef}>
                    {dpRoLists.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => onChange?.(item.id)}
                            className={`cha-pagination-item swiper-slide ${activeId === item.id ? "cha-pagination-item-active swiper-slide-active cha-pagination-item-active" : ""
                                }`}
                        >
                            <div
                                className="active-pagination-item-bg"
                                style={{
                                    backgroundImage: "url('https://fastcdn.mihoyo.com/content-v2/nap/129599/18a6b7db17dfc929977f838642f0e90f_7626201324200152421.png')",

                                }}
                            />
                            <img src={resolveImagesUrl(item.smimg)} />
                        </div>
                    ))}
                </div>
            </div>
            <div onClick={() => nudge(1)}
                className="cha-pagination-arrow cha-pagination-arrow-right"
                style={{ display: canScroll ? "block" : "none" }} />
        </div>
    );
};