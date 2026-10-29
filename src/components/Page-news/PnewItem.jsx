'use client'

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useWindowScroll } from 'react-use';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { ReactLenis } from '@studio-freight/react-lenis';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';

import { useGSAP } from '@gsap/react';
import { gsap, wrap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PnewsItem from '@/utils/Page/PnewsItem'
import { Back } from '@/components/Back/Back'



export const PnewItem = ({ path }) => {

    const [content, setContent] = useState('');
    const [tag, setTag] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');



     useEffect(() => {
        if (!path) return;

        const currentLink = PnewsItem.find(item => item.link === `/news/${path}`);
        if (currentLink) {
            const content = currentLink.ct;
            setContent(content);

            const tag = currentLink.tag;
            setTag(tag);

            const title = currentLink.title;
            setTitle(title);

            const date = currentLink.date;
            setDate(date);



        }
    }, [path]);












    return (

        <div className='news-detail relative min-h-[100%] mt-[1rem]'>
            <Back />

            <div className='news-detail-wrapper'>

                <div className='section-wrap relative my-0 mx-auto w-full'>

                    <div className='news-detail-container relative z-[2] w-[12.8rem] pt-[2.6rem] pb-[1.6rem] my-0 mx-auto'>
                        <div className='news-detail-article relative'>

                            <div className="news-detail-title text-[.46rem] text-center leading-[1.3] font-extrabold">
                                {title}

                            </div>

                            <div className="news-detail-info">
                                <span className="breadcrumb flex items-center">

                                    <div> 绝区零 &gt; </div>
                                    <div className="news-tag">
                                        {tag}
                                    </div>
                                </span>
                                <span>{date}</span>
                            </div>

                            <div dangerouslySetInnerHTML={{ __html: content }} className='news-detail-content'>


                            </div>


                        </div>

                    </div>

                </div>

                <div className='section-foot'></div>

            </div>
        </div>


    );
}