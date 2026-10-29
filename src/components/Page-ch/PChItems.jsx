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

import { PChNav } from './PChLIstNav';


import Pci from '@/utils/Page/ProlesDp';
import PdpRoles from '@/utils/Page/PdpRoles';

import usePanelScrollWithCustomBar from '@/hooks/usePanelScrollWithCustomBar';

export const PChItems = ({ currentDpRo, currentRo }) => {
    const [currentDpRos, setCurrentDpRos] = useState(0);
    const [activeRoleId, setActiveRoleId] = useState(null);

    const hoverAreaRef = useRef(null);  
    const panelRef = useRef(null);    
    const railRef = useRef(null);    
    const barRef = useRef(null);      



    useLayoutEffect(() => { setCurrentDpRos(currentRo); }, [currentRo]);

    const dpRoLists = useMemo(
        () => PdpRoles.filter(item => item.dp === currentDpRos),
        [PdpRoles, currentDpRos]
    );



    useLayoutEffect(() => {
        if (!dpRoLists.length) { setActiveRoleId(null); return; }
        setActiveRoleId(prev =>
            prev != null && dpRoLists.some(i => i.id === prev)
                ? prev
                : dpRoLists[0].id
        );
    }, [dpRoLists]);

     const displayRoleId = activeRoleId ?? dpRoLists[0]?.id ?? null;
    const displayRole = useMemo(
        () => dpRoLists.find(i => i.id === displayRoleId) ?? null,
        [dpRoLists, displayRoleId]
    );

    const handleRoleChange = useCallback((id) => {
        setActiveRoleId(id);
    
    }, []);



 usePanelScrollWithCustomBar(
    { hoverAreaRef, panelRef, railRef, barRef },
    { depsKey: displayRoleId }  
  );

 

    return (
        <>
            <div className="swiper-container cha-swiper swiper-container-fade swiper-container-initialized swiper-container-horizontal">
                <div className="swiper-wrapper roleH">
                    {displayRole && (
                        <div className="cha-swiper-slide swiper-no-swiping swiper-slide">
                            {/* 立绘 */}
                            <div
                                className="character-cover swiper-lazy swiper-lazy-loaded"
                                style={{ backgroundImage: `url(${displayRole.img})` }}
                            />
                            {/* 信息 */}
                            <div className="character-info">

                                <div className="character-info-main">
                                    {/* ==================信息上 */}
                                    <div className="character-info-row">

                                        <div className="character-info-name font-hongmeng">

                                            <div style={{ backgroundImage: 'url(https://fastcdn.mihoyo.com/content-v2/nap/155981/ef4310d8f18a62aa70f412fb534b1086_9051494001773023421.png)' }}></div>
                                            <span>{displayRole.na}</span>
                                            <span className="character-info-name-en font-mont-heavy character-info-name-en-155981" style={{ transform: 'scale(0.882951)' }}>{displayRole.en}</span>
                                        </div>

                                    </div>
                                    {/* ==================信息中 */}
                                    <div className="character-info-row">

                                        <div className="character-voice-player font-hongmeng">
                                            {/* ==================图标 */}
                                            <div className="character-voice-btn">
                                                <div className="character-voice-btn-inner">
                                                    <div className="character-voice-btn-inner-highlight">
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ==================配音 */}
                                            <span className="character-voice-player-name">{displayRole.ccv}</span>

                                            <div className="character-voice-lang-switcher character-voice-lang-switcher-0">
                                                <span>中</span>
                                            </div>
                                            {/* ================== */}
                                        </div>

                                        {/* ==================角色图标 */}

                                        <div className="character-info-prop">
                                            <img src="https://fastcdn.mihoyo.com/content-v2/nap/155981/5ce2a9d07338b830be5e0a473e2805ba_7246761882227005194.png" />
                                            <img src="https://fastcdn.mihoyo.com/content-v2/nap/155981/cbfdcc694851b12252df16af576d824e_8041307777904600389.png" />


                                        </div>
                                        {/* ================== */}
                                    </div>

                                </div>
                                {/* ==================台词 */}
                                <div className="character-info-word font-hongmeng">{displayRole.ti}</div>
                                {/* ==================信息下 详细信息 */}
                                <div className="character-info-desc-container font-hongmeng-light">

                                    <div ref={hoverAreaRef} className="vuescroll hasVBar vBarVisible mouseEnter" style={{ height: ' 100%', width: ' 100%', padding: '0px', position: 'relative', overflow: ' hidden' }}>


                                        {/* ==================文段父级 */}

                                        <div   tabIndex={0}  ref={panelRef} className="panel" style={{ position: 'relative', boxSizing: 'border-box', height: '100%', overflow: 'hidden scroll', marginRight: '-9.375px' }} >

                                            <div className="-view" style={{ position: 'relative', boxSizing: 'border-box', minWidth: '100%', minHeight: '100%', width: '100%' }}>
                                                {/* ==================文段 */}
                                                <div dangerouslySetInnerHTML={{ __html: displayRole.info }} className="character-info-desc">

                                                </div>
                                                {/* ==================文段 */}
                                                {/* ==================不知道干嘛的 */}
                                                {/* <div style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;">
                                                         <object type="text/html" data="about:blank" style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object>
                                                   </div> */}
                                                {/* ==================不知道干嘛的 */}
                                            </div>

                                        </div>

                                        {/* ==================滚动条 */}

                                        <div ref={railRef} className="rail-is-vertical" style={{ position: 'absolute', zIndex: 1, borderRadius: '0.05rem', background: 'rgb(239, 239, 239)', border: 'none', width: '0.05rem', top: '0px', bottom: '0px', right: '2px' }}>
                                            <div className="bar-wrap-is-vertical" style={{ position: 'absolute', borderRadius: '0.05rem', top: '0px', bottom: '0px', width: '100%' }}>
                                                <div ref={barRef} className="bar-is-vertical" style={{ cursor: 'pointer', position: 'absolute', margin: 'auto', transition: 'opacity 0.5s', userSelect: 'none', borderRadius: 'inherit', height: '69.2771%', background: 'rgb(192, 192, 192)', width: '0.05rem', opacity: 1, transform: 'translateY(44.5217%)', left: '0px', right: '0px' }}>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ================== */}
                                    </div>

                                    <div className="character-info-desc-cover"></div>

                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ================= 角色导航（注意去掉那个多余的 'c'） */}
            <PChNav
                dpRoLists={dpRoLists}
                activeId={displayRoleId}
                onChange={handleRoleChange}
            />
        </>
    );
}


