'use client'

import { ReactLenis } from '@studio-freight/react-lenis';
import { Header } from "@/components/Main/Nav/Nav";
import { Footer } from "@/components/Main/Footer/Footer";
import { PnewItem } from "@/components/Page-news/PnewItem";

export default function NewsDetailClient({ path }) {
    const onTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            block: 'nearest',
        });
    };

    return (
        <ReactLenis root>
            <div id="frame" className="min-w-[1270px]">
                <Header />
                <PnewItem path={path} />
                <Footer onTop={onTop} />
            </div>
        </ReactLenis>
    );
}