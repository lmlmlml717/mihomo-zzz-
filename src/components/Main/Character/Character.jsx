'use client'
import React from 'react';
import { useEffect, useState, useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Title, RolesTitle } from '../InnerTitle/InnerTItle';
import { CharacterNav } from '../CharacterNav/CharacterNav';
import { CharacterBg } from '../CharacterBg/CharacterBg';
import { More } from '../More/More';

gsap.registerPlugin(ScrollTrigger);
export const Character = () => {

    const [fromChild, setFromChild] = useState(1);

    const toChild = (current) => {
        setFromChild(current);
    }

    





    return (
        <section className="home-section section-character pt-[1.4rem]"
          
            id="active2">

            {/* ====================背景 */}
            <div className="top-[-4.86rem] absolute right-0 w-[9.48rem] z-[1] pointer-events-none">

                <img src={`/mihomo-zzz-/images/fill-bar.3e3b1a7.png`} className="absolute top-[-1.1rem] left-[-2.8rem] w-[12.4rem] max-w-none" />

                <img src={`/mihomo-zzz-/images/fill-black-right.c6c1db1.png`} className="w-full " />

            </div>

            <div className="pt-[1.4rem] absolute top-0 left-[-0.01rem] w-[25.62rem] pointer-events-none">
                <img src={`/mihomo-zzz-/images/fill-black-short.9c5f6aa.png`} />
            </div>
            {/* ====================背景end */}

            < div className="relative z-[2] h-[10.86rem]">
                {/* ====================Title */}
                <div className='section-nav font-num lg z-[1] left-0 h-[7.86rem] w-[8.45rem] top-[2.98rem] bg-[url(/mihomo-zzz-/images/bg-nav.daea1f6.png)] bg-no-repeat bg-[length:100%_100%]'>

                    <div className=" absolute right-0 pointer-events-auto text-left w-[5.24rem] pl-[.7rem] text-[left]">

                        <Title className="section-ch-title" title="角色介绍" secondTitle="Character" num="02" />

                    </div>
                </div>

                {/* ====================Titleend */}
                {/* ====================角色 */}
                <div className='font-[Impact] relative w-[14.38rem] h-[6.5rem] rounded-tr-[0.9rem] overflow-hidden '>
                    <RolesTitle current={fromChild} />

                </div>
                {/* ====================角色end */}

                <div className='absolute top-[3rem] left-[4.94rem] w-[20.67rem] h-[7.86rem] z-[2] bg-[url(/mihomo-zzz-/images/chara-panel-bg.86c2c99.png)] bg-no-repeat bg-[3.1rem_0] bg-[length:100%_100%]'>
                    <div className='absolute top-0 left-0 w-[20.65rem] h-[7.86rem] bg-[url(/mihomo-zzz-/images/chara-panel.20d68d6.png)] bg-no-repeat bg-[length:100%_100%] '>
                    </div>
                    {/* ====================背景图 */}

                    <CharacterNav toParent={toChild} />
                    <CharacterBg current={fromChild} />
                    <More />

                </div>

            </div>

        </section >
    );
}
