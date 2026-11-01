'use client'
import React from 'react';
import { useEffect, useState, useRef } from 'react';


import Roles from '../../../utils/Main/Roles'


export const CharacterBg = ({ current }) => {


    const [tfStyle, setTfStyle] = useState('');

    useEffect(() => {

    }, [current]);


    return (
        <div className="absolute bottom-0  w-[17.44rem] h-[12.53rem]">

            <div className="swiper-container w-[20.6rem] h-full">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {Roles.map((item, index) => (
                            <div key={index}>
                                <div className={`${current === item.id ? 'section-ch-active' : ''}`}>

                                    <div className={`absolute left-0 bottom-0 z-[2] w-[18.05rem] h-[12.53rem] 
                                ${current === item.id ? 'ch-active' : ' ch opacity-0'}`}
                                    >
                                        <img src={`/mihomo-zzz-${item.roUrl}`} className="w-full h-full " />
                                    </div>

                                    <div className={`absolute left-[11.25rem] bottom-[.73rem] z-[1] w-[9rem] h-[7.13rem] overflow-hidden flex flex-row justify-start items-start
                                 ${current === item.id ? 'ch-bg-active' : ' ch-bg opacity-0'}`}
                                    >
                                        <img src={`/mihomo-zzz-${item.bgUrl}`} className="w-full h-auto " />
                                    </div>
                                    {/* ===================== 文字*/}
                                    <div className={`ch-ti absolute right-[1.54rem] bottom-[0rem] z-[3] w-[5.2rem] h-[7.86rem] pt-[1.95rem] text-right
                                 ${current === item.id ? 'ch-title-active' : ' ch-title opacity-0'}`}
                                    >
                                        <div className='act mr-[.06rem] text-[.42rem]  text-[#222122]'>
                                            <span>{item.dp}</span>
                                        </div>
                                        <div className='act mt-[.16rem] text-[.9rem]  text-[#222122]'>
                                            <span className='inline-block'>{item.name}</span>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div >
    )
}