'use client'
import React, { use } from 'react';
import { useEffect, useState, useRef } from 'react';
import { useWindowScroll } from 'react-use';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { Sidebar } from '@/components/Main/Sidebar/Sidebar';


import { Index } from '@/components/Main/Index/Index';
import { Character } from '@/components/Main/Character/Character';
import { News } from '@/components/Main/News/News';
import { Feature } from '@/components/Main/Feature/Feature';
import { World } from '@/components/Main/World/World';
import { Footer } from '@/components/Main/Footer/Footer';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


export const Home = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prev, setPrev] = useState(-1);

    const { y: scrollY } = useWindowScroll();

    const [needUpdate, setNeedUpdate] = useState(false);

    const animationsRef = useRef({});
    useEffect(() => {
      
        if (scrollY === 0) {
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 200);
            registerTrigger();
        }
    }, [scrollY]);
    const registerTrigger = () => {
        gsap.utils.toArray(".home-section").forEach((sectionEl, index) => {
            const q = gsap.utils.selector(sectionEl);
            gsap.timeline({
                scrollTrigger: {
                    id: `section${index}`,
                    trigger: sectionEl,
                    toggleActions: "play none resume reset",
                    scrub: true,
                    start: `top+=80 bottom-=120`,
                    end: `+=40`,
                    onEnter: () => {
                        setActiveIndex(index + 1);
                        setPrev(index);

                    },
                    onLeaveBack: () => {
                        setActiveIndex(index);
                        setPrev(index - 1);
                    },
                    onUpdate: (trigger) => {
                        const sectionIndex = trigger.vars.id.replace("section", "");
                        const animList = animationsRef.current[sectionIndex];
                        if (animList) {
                            const progress = trigger.progress;
                            animList.forEach(animTl => {
                                animTl.progress(progress);
                            });
                        };
                    },
                },
            });
            if (index === 0) {
                 const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionEl,
                        start: `top+=80 bottom-=120`,
                        end: `+=40`,
                        toggleActions: "play none resume reset",
                     },
                });

                tl.fromTo(q(".section-ch-enName"), {
                    xPercent: 100,
                    duration: 0.5,
                    ease: "power2.inOut",
                }, {
                    xPercent: 0,

                })
                tl.fromTo(q(".section-ch-title"), {

                    xPercent: -150,
                    duration: 0.5,

                }, {
                    xPercent: 0,
                    delay: 0.2,
                    stagger: {

                        each: 0.1,
                        ease: 'power2.inOut',

                    }
                })
                const tl2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionEl,
                        start: `top+=80 bottom-=120`,
                        end: `+=40`,
                        toggleActions: "play none resume reset",
                     },
                });
                tl2.fromTo(q(".ch-active"),
                    {
                        ease: "power2.inOut",
                        xPercent: 100,
                        duration: 0.3,
                    },
                    { xPercent: 0, }

                )
                tl2.fromTo(q(".ch-bg-active"), {
                    xPercent: 120,

                }, {
                    xPercent: 0,
                    duration: 0.5,
                    delay: 0.2,
                    stagger: {
                        each: 0.1,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            gsap.set(".ch-bg-active", {
                                xPercent: 0,
                            });
                        },

                    }
                });
                tl2.fromTo(q(".act"),
                    {
                        ease: "power2.inOut",
                        xPercent: 100,
                        duration: 0.5,


                    },
                    {
                        xPercent: 0,
                       stagger: {
                            each: 5,
                            ease: 'power2.inOut',
                            onComplete: () => {
                                gsap.set(".act", {
                                    xPercent: 0,
                                });
                            },
                        },
                    })
            } else if (index === 1) {

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionEl,
                        start: `top+=80 bottom-=120`,
                        end: `+=40`,
                        toggleActions: "play none resume reset",
                       },


                });

                tl.fromTo(q(".news-banner"), {
                    yPercent: 40,
                    duration: 0.7,
                    ease: "power2.inOut",
                }, {
                    yPercent: 0,
                })
                const tl2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionEl,
                        start: `top+=100 bottom-=120`,
                        end: `+=40`,
                        toggleActions: "play none resume reset",
                      },


                });
                tl2.fromTo(q(".section-news-title"), {



                    xPercent: 100,

                }, {
                    xPercent: 0,
                    duration: 0.5,
                    delay: 0.2,
                    stagger: {

                        each: 0.1,
                        ease: 'power2.inOut',

                    }
                })
            }
            else if (index === 2) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionEl,
                        start: `top+=80 bottom-=120`,
                        end: `+=40`,
                        toggleActions: "play none resume reset",
                     

                    },


                });
                tl.fromTo(q(".section-f-title"), {


                    xPercent: -150,

                }, {
                    xPercent: 0,
                    duration: 0.5,
                    delay: 0.2,
                    stagger: {

                        each: 0.1,
                        ease: 'power2.inOut',

                    }
                })
            } else if (index === 3) {

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionEl,
                        start: `top+=80 bottom-=120`,
                        end: `+=40`,
                        toggleActions: "play none resume reset",
                     

                    },


                });

                tl.fromTo(q(".w-banner"), {
                    yPercent: 40,
                    duration: 0.7,
                    ease: "power2.inOut",
                }, {
                    yPercent: 0,

                })
                const tl2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionEl,
                        start: `top+=100 bottom-=120`,
                        end: `+=40`,
                        toggleActions: "play none resume reset",
                     

                    },


                });
                tl2.fromTo(q(".section-w-title"), {


                    xPercent: 100,

                }, {
                    xPercent: 0,
                    duration: 0.5,
                    delay: 0.2,
                    stagger: {

                        each: 0.1,
                        ease: 'power2.inOut',

                    }
                })
            }


        });
    };
    const onNext = () => {
        if (currentIndex < 4)

            setCurrentIndex(prev => prev + 1);

    };

    const onPrev = () => {
        if (currentIndex > 0)
            setCurrentIndex(prev => prev - 1);

    };
    useEffect(() => {
        if (activeIndex !== currentIndex) {
            setCurrentIndex(activeIndex);

        }
    }, [activeIndex]);
    const onTop = () => {
        setActiveIndex(0);
        setCurrentIndex(0);
        setPrev(-1);
        ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.vars.id !== "home-scroll") {
                trigger.kill();
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            block: 'nearest',
        });

    };
    useGSAP(() => {
        gsap.to(".fill-bg, #active2", {
            scrollTrigger: {
                id: "home-scroll",
                trigger: ".section-index",

                toggleActions: "play none resume reset",
                start: "top top",
                end: `+=${window.innerHeight} top`,

                scrub: true,
             

            },
            y: "-4%",

        });
        gsap.to(".fill-text", {
            scrollTrigger: {
                id: "home-scroll",
                trigger: ".section-index",
                start: "top top",
                end: `+=${window.innerHeight} top`,
                toggleActions: "play none resume reset",

                scrub: true,
             
            },
            y: "-14%",

        });
    }, []);


    return (
        <>
            <div className="home relative overflow-hidden"
                 style={{ paddingTop: '.48rem' }}
            >
                <Sidebar

                    prev={prev}

                    currentIndex={activeIndex}
                    clickIndex={currentIndex}

                    onNext={onNext}
                    onPrev={onPrev}


                />

                <div className="home-wrap h-full">
                    <Index />
                    <Character />
                    <News />
                    <Feature />
                    <World />


                </div>

            </div>
            <Footer onTop={onTop} />
        </>

    );
}