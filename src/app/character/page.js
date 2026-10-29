"use client"


import { ReactLenis } from '@studio-freight/react-lenis';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';



import { Header } from "../../components/Main/Nav/Nav";
import { Footer } from "../../components/Main/Footer/Footer";
import { Pch } from "@/components/Page-ch/PChList";




export default function Layout({ children }) {



    const { isMobile, isPC } = useDeviceDetect();
    const onTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            block: 'nearest',
        });

    };



    return (<ReactLenis root>
        <div id="frame" className="min-w-[1270px]">
            <Header />
            <Pch >{children}</Pch>
            <Footer onTop={onTop} />

        </div>

    </ReactLenis>
    );

}