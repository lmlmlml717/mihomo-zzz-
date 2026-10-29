'use client'

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useWindowScroll } from 'react-use';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Ptitle } from '../Main/InnerTitle/InnerTItle';
import { ChI } from './ChI';
import { PChNav } from './PChLIstNav';
import { Pnav } from './PDPnav';
import { PChItems } from './PChItems';

import Pci from '../../utils/Page/ProlesDp';
import PdpRoles from '@/utils/Page/PdpRoles';






export const Pch = () => {

    const [currentDp, setCurrentDp] = useState(0);

    const [currentRo, setCurrentRo] = useState(0);



    const toChild = (dpindex, roindex) => {
        setCurrentDp(dpindex);
        setCurrentRo(roindex);
    }

     return (
        <div className="character" >
            {/* ================== */}
            <div className='section-nav font-impact '>
                {/* <svg viewBox="0 0 291.28 414" className="section-nav-bg">
                        <path fill="#eca03e" d="m0,414V0h234.75c5.74.23,24.8,1.71,39.77,16.48,5.61,5.53,9.9,12.19,12.78,19.52,8.11,20.63,3.54,44.11-11.03,60.83C184.18,202.55,92.09,308.27,0,414Z">
                        </path>
                    </svg> */}
                <div className='section-nav-inner'>

                    <Ptitle className="" title="角色介绍" secondTitle="Character" num="02" />


                </div>
            </div>
            {/* ==================角色 */}

            <PChItems currentDpRo={currentDp} currentRo={currentRo} />


            {/* ==================阵营导航 */}

            < div className="side-camp-selection-shadow" ></div >
            <Pnav toChild={toChild} />

            {/* ================== */}

            <div className="character-color-block" style={{ background: '#d8fa00' }}>

            </div>


        </div >
    )

}