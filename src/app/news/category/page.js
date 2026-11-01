'use client'

import { Suspense, useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useWindowScroll } from 'react-use';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


import { ReactLenis } from '@studio-freight/react-lenis';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { resolveImgUrl } from '@/utils/imgUrl';

import PnewsItems from '@/utils/Page/PnewsItems';
import { getPublicData } from '@/app/api/route';



function NewsCategoryPageInner() {

    const [data, setData] = useState([]);

    const searchParams = useSearchParams();

   
    const categoryPage = parseInt(searchParams.get('type'), 10) || 1;
   
    const itemsType = PnewsItems.filter(item => item.type === categoryPage);

   
    const totalItems = itemsType.length;
    

    const totalDataItems = data.filter(item => item.type == categoryPage).length;

    const totalP = Math.ceil(totalDataItems / 9);
    
    const totalPages = Math.ceil(totalItems / 9);
  
    const [currentPage, setCurrentPage] = useState(1);
      useEffect(() => {
        console.log("category", categoryPage)
        setCurrentPage(1)
    }, [categoryPage]);
     const getCurrentData = () => {
        const start = (currentPage - 1) * 9;
        return {
            currentData: itemsType.slice(start, start + 9),
        };
    };
    const getSliceData = () => {
        const start = (currentPage - 1) * 9;
        return {
            currentData: data.filter(item => item.type == categoryPage).slice(start, start + 9),
        };
    };
    data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    const formatDate = (dateString) => {
        if (!dateString) return '';
         return dateString.split('T')[0];
    };



    const setPages = (current, total) => {
        if (total <= 7) {
       
            return Array.from({ length: total }, (_, i) => i + 1);
        };

        if (current <= 5) {
            return [
                ...Array.from({ length: 5 }, (_, i) => i + 1),
                'right-ellipsis',
                total,
            ];
        };

        if (current >= total - 4) {
            return [
                1,
                'left-ellipsis',
                ...Array.from({ length: 5 }, (_, i) => total - 4 + i), ];
        };

        return [
            1,
            'left-ellipsis',
            current - 2,
            current - 1,
            current,
            current + 1,
            current + 2,
            'right-ellipsis',
            total,
        ];
    };


    useEffect(() => {
        console.log(data);
    }, [data]);




    return (
        <>
            <div className='news-list mt-[1.1rem] mb-[.2rem] mx-auto flex flex-row flex-wrap'>

                {/* ==========================                          ==========================       */}

                {getCurrentData().currentData.map((item, index) => (
                    <div key={index} className='news-list-item'>

                     
                        <Link href={item.link}>
                            <div className="news-list-item-banner">
                                <img src={resolveImgUrl(item.img)} />
                            </div>
                        </Link>
                      
                        <div className="news-list-item-content mt-[.34rem]">
                        
                            <div className="news-list-item-date font-impact">
                                <div className='mr-[.2rem]'>{item.date}</div>


                                <div className="news-tag mr-[.2rem]">
                                    {item.category}

                                </div>
                            </div>
                         
                            <Link href={item.link} className="">

                                <div className="news-list-item-title">
                                    {item.title}
                                </div>
                                <div className="news-list-item-desc">
                                    {item.desc}
                                </div>
                            </Link>

                        
                        </div>
                       
                    </div>
                ))}
               
                {/* ==========================                          ==========================       */}
            </div>

            <div className='news-pager text-center flex justify-center relative top-0 text-0 text-white'>

                <div className='news-pager-item flex justify-between items-center relative pt-0 px-[.94rem] h-[.52rem] leading-[.52rem] rounded-[.28rem] bg-[#222122]'>

                    <button className='mihoyo-pager-rich-prev' onClick={(e) => {
                        if (currentPage === 1) {

                            return;
                        }

                        else {
                            setCurrentPage((prev) => prev - 1);
                        }
                    }}> <span></span></button>

                    {setPages(currentPage, totalPages).map((p, i) => {

                        if (p === 'left-ellipsis' || p === 'right-ellipsis') {
                            return (
                                <strong
                                    key={`${p}-${i}`}
                                    className='mihoyo-pager-rich-ellipsis'
                                >
                                    ...
                                </strong>
                            );
                        }
                        const isCurrent = p === currentPage;
                        return (
                            <button
                                key={p}
                                onClick={() => setCurrentPage(p)

                                }

                                className={
                                    'mihoyo-pager-rich-button' +
                                    (isCurrent ? ' mihoyo-pager-rich-current' : '')
                                 }
                            >
                                {p}
                            </button >
                        );
                    })}
                  

                    <button className='mihoyo-pager-rich-next'

                        onClick={() => {
                            if (currentPage === totalPages) {
                                return;
                            }
                            else {
                                setCurrentPage((prev) => prev + 1);
                            }
                        }} > <span></span>
                    </button>
                  

                </div>

            </div>
        </>
    );
};
export default function NewsCategoryPage() {
    return (
        <Suspense fallback={null}>
            <NewsCategoryPageInner />
        </Suspense>
    );
}