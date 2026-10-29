'use client'
import React from 'react';
import { useEffect, useState, useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';


import Roles from '../../../utils/Main/Roles'
export const Title = ({ title, secondTitle, num ,className,style }) => {


    return (
        <>
            <div className={`${className} title text-[.65rem] leading-0  `} style={style}>{title}</div>


            <div className={`${className} secondTitle text-[.32rem] leading-0 font-[Impact] tracking-[.01em] pl-[.05rem] mt-[.06rem] uppercase`}  style={style}>{secondTitle}</div>
            <div className={`${className} num text-[1.86rem] leading-0 font-[Impact] mt-[.06rem]`}  style={style}>{num}</div>
        </>
    )
}

export const Ptitle = ({ title, secondTitle, num ,className,style }) => {


    return (
        <>
            <div className={`${className} title text-[.54rem] leading-0  `} style={style}>{title}</div>


            <div className={`${className} secondTitle text-[.24rem] leading-0 font-[Impact] pl-[.04rem] mt-[.06rem] uppercase`}  style={style}>{secondTitle}</div>
            <div className={`${className} num text-[1.16rem] leading-0 font-[Impact] mt-[.06rem]`}  style={style}>{num}</div>
        </>
    )
}

export const RolesTitle = ({ current }) => {


    const [tx, setTx] = useState('')
    const TitleRef = useRef(null)
    const [enName, setEnName] = useState()
    const [isId, setIsId] = useState()
    const [oldName, setOldName] = useState()
   
    useGSAP(() => {

        
        const currrentId = Roles.find(item => item.id === current);
        setIsId(currrentId.id)
      

        setEnName(currrentId.enName);
    
        const oldName = document.createElement('div')
        oldName.textContent = enName;
        TitleRef.current.insertBefore(oldName, TitleRef.current.firstChild);
        const x = oldName.offsetWidth;
        const xRem = x / 16;
      
        gsap.fromTo(TitleRef.current,
            { xPercent: 0 },
            {
                xPercent: -xRem * 0.5,
                ease: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
                duration: 0.3,
                onComplete: () => {
                    gsap.set(TitleRef.current, { xPercent: 0 })
                    TitleRef.current.removeChild(oldName)
                }
            }
        );

    }, [current]);

    return (
        <div
            ref={TitleRef}
            className={`section-ch-enName absolute text-[7.22rem] leading-[5.7rem] text-[rgba(239,239,239,0.1)] whitespace-nowrap flex flex-nowrap}`}
        >

            <div>

                {enName}

            </div>

        </div >

    )
}