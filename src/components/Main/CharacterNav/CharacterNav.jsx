'use client'
import React from 'react';
import { useEffect, useState, useRef } from 'react';


import Roles from '../../../utils/Main/Roles'
import { resolveImgUrl } from '../../../utils/imgUrl'

const CharacterNavItem = ({ current, next, prev, style }) => {

    useEffect(() => {


    }, [current])


    return (
        <>
            <div className='swiper-wrapper ' style={style}>
                {Roles.map((item, index) => (
                    <div key={item.id}
                        className={
                            current === item.id ?
                                "home-character_nav-item swiper-slide swiper-slide-thumb-active"
                                : "home-character_nav-item swiper-slide"}
                    >


                        <img src={resolveImgUrl(item.smUrl)} />
                        <div className={current === item.id ? "home-character_nav-mask active" : "home-character_nav-mask"}></div>
                    </div>))}
            </div>
        </>
    );


};
export const CharacterNav = ({ toParent }) => {

    const [current, setCurrent] = useState(1);
    const [next, setNext] = useState(2);
    const [prev, setPrev] = useState(0);


    const [swiperStyle, setSwiperStyle] = useState();

    const [active, setActive] = useState(null);
    const onClickNext = () => {
        if (current < Roles.length) {
            setCurrent((prev) => prev + 1);
            setNext((prev) => prev + 1);
            setPrev((prev) => prev + 1);
            
        }

    }
    const onClickPrev = () => {
        if (current > 1) {
            setCurrent((prev) => prev - 1);
            setNext((prev) => prev - 1);
            setPrev((prev) => prev - 1);
        }


    }
  
    useEffect(() => {
        if (current > 0 && current <= Roles.length) {

            const tfPx = current > 3 ? -(current - 3) * 1.6 : 0;

            const tfStyle = { transform: `translate3d(${tfPx}rem, 0px, 0px)`, transitionDuration: '300ms' };

            setSwiperStyle(tfStyle);

            const currentRoleId = Roles.find(role => role.id === current)?.id;
            setActive(currentRoleId);

            toParent(current);
        }

    }, [current, next, prev]);



    return (
        <div className='home-character_main-nav'>

            <div className='home-character_nav swiper-container '>

                <CharacterNavItem
                    current={active}
                    next={next}
                    prev={prev}
                    style={swiperStyle}
                />

            </div>

            {/* ====================箭头*/}
            <div className='swiper-navigation '>
                <div onClick={onClickPrev} className='swiper-button-prev left-[.08rem] right-auto' style={{ pointerEvents: 'auto' }} ></div>

                <div onClick={onClickNext} className='swiper-button-next right-[.08rem] left-auto rotate-[180deg]' style={{ pointerEvents: 'auto' }} ></div>

            </div>
            {/* ====================箭头end */}

        </div>
    );
}
