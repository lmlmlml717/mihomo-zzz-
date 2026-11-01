
import React from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export const Index = () => {









    return (
        <section className="home-section1 section-index relative" id="active1">

            {/* ===================== */}
            <div className="fill-bg absolute top-[2.32rem] left-0 w-[14.42rem] pointer-events-none">


                <img src={`/mihomo-zzz-/images/fill-bg.c5ecc5f.png`} className="w-full" />

            </div>
            {/* ===================== */}
            <div className="fill-text absolute top-[.1rem] right-[1.56rem] w-[1.65rem] pointer-events-none">
                <img src={`/mihomo-zzz-/images/fill-text.b4d7ce4.png`} className="w-full" />
            </div>
            {/* ===================== */}
            <div className="home-kv min-h-[15.37rem]  mx-auto mb-[.3rem] "
            >

                <div className="relative w-[19.2rem] my-0 mx-auto">
                    <div className="relative z-[1] w-full h-full leading-[0]">
                        <img src={`/mihomo-zzz-/images/37198ce9c5ee13abb2c49f1bd1c3ca97_7702488080246216541.png`} className="w-full h-auto" />

                    </div>
                </div>
            </div>
            {/* ===================== */}
        </section>

    )
}
