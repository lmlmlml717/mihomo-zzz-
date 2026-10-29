'use client'

import { useEffect, useState,Suspense ,useRef, useCallback, useMemo } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';



import { ReactLenis } from '@studio-freight/react-lenis';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';


import { Header } from "../../components/Main/Nav/Nav";
import { Footer } from "../../components/Main/Footer/Footer";
import { Pnews } from "../../components/Page-news/Pnews";




function NewsLayoutInner({ children }) {

    const searchParams = useSearchParams();
    const pathname = usePathname();

 
    const raw = searchParams.get('type');
    const parsed = Number.parseInt(raw ?? '', 10);
    const page = Number.isNaN(parsed) ? 0 : parsed;





    const [currentPg, setCurrentPg] = useState(page);
    const normalizedPath = pathname?.replace(/\/$/, '') ?? '';
    const isDynamicNews =
        normalizedPath.startsWith('/news/') &&
        normalizedPath !== '/news' &&
        normalizedPath !== '/news/category';

  

    useEffect(() => {
     
        setCurrentPg(page);
    }, [page]);

    const { isMobile, isPC } = useDeviceDetect();
    const onTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            block: 'nearest',
        });

    };



    return isDynamicNews ? (
        <>{children}</>
    ) : (<ReactLenis root>
        <div id="frame" className="min-w-[1270px]">
            <Header />
            <Pnews children={children} currentPg={currentPg} />
            <Footer onTop={onTop} />

        </div>

    </ReactLenis>
    );

}
export default function layout({ children }) {
    return (
        <Suspense fallback={null}>
            <NewsLayoutInner>{children}</NewsLayoutInner>
        </Suspense>
    );
}