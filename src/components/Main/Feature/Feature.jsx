'use client'
import React from 'react';
import { useEffect, useState, useRef } from 'react';



import { Title, RolesTitle } from '../InnerTitle/InnerTItle';
import { CharacterNav } from '../CharacterNav/CharacterNav';
import { FeatureNav, FeatureTitle } from '../FeatureNav/FeatureNav';
import { FeatureUib, FeatureUis } from '../FeatureUi/FeatureUi';

import FeatureItems from '../../../utils/Main/FeatureItems';


export const Feature = () => {

    const [current, setCurrent] = useState(1);
    const [title, setTitle] = useState();
    useEffect(() => {
        const currentTitle = FeatureItems.find(item => item.id === current);

        setTitle(currentTitle.ItemTitle);

    }, [current])

    const onChange = (from) => {
      
        setCurrent(from);

    }



  
    return (
        <section className="home-section section-feature" id="active4">
            {/* ===================== */}
            <div className="top-[-4.7rem] absolute right-0 w-[9.48rem] z-[0] pointer-events-none">

                <img src="/images/fill-bar.3e3b1a7.png" className="absolute top-[-1.1rem] left-[-2.8rem] w-[12.4rem] max-w-none" />

                <img src="/images/fill-black-right.c6c1db1.png" className="w-full " />

            </div>
            {/* ===================== */}
            <div className="absolute top-0 left-[-0.01rem] w-[25.62rem] pointer-events-none">
                <img src="/images/fill-black-short.9c5f6aa.png" className="w-full " />

            </div>
            {/* ===================== */}

            <div className="relative mt-[1.18rem] h-[12.7rem]">
                {/* ===================== */}
                <div className="section-nav lg left-0 left-0 h-[7.86rem] w-[8.45rem] top-[2.98rem] bg-[url(/images/bg-nav.daea1f6.png)] bg-no-repeat bg-[length:100%_100%]">
                    <div className=" absolute right-0 pointer-events-auto text-left w-[5.24rem] pl-[.7rem] text-[left]">
                        <Title className="section-f-title" title="游戏特色" secondTitle="feature" num="04" />


                    </div>
                </div>

                {/* ===================== */}
                <div className='absolute top-[3rem] left-[4.98rem] w-[20.67rem] h-[7.86rem] bg-[url(/images/panel.66cafff.png)] bg-no-repeat bg-[length:100%_100%]'>
                    <FeatureNav current={current} />


                    {/* 大按钮 */}
                    <FeatureUib onChange={onChange} current={current} />


                    <FeatureTitle title={title} />


                </div>
                {/* 小按钮 */}
                <FeatureUis onChange={onChange} current={current} />
            </div>

        </section>
    );
}