
import PnewsItems from '@/utils/Page/PnewsItems';



import { use } from 'react';



import { ReactLenis } from '@studio-freight/react-lenis';



import { Header } from "@/components/Main/Nav/Nav";
import { Footer } from "@/components/Main/Footer/Footer";
import { PnewItem } from "@/components/Page-news/PnewItem";
import NewsDetailClient from "./newsdetailclient";

export async function generateStaticParams() {
    const links = [...new Set(PnewsItems.map(item => item.link))];
    return links
        .filter(link => link.startsWith('/news/'))
        .map(link => ({
            Newsitems: link.replace('/news/', '').split('/'),
        }));
}

// export default function NewsPageItems({ params }) {

// const path = use(params).Newsitems[0];




//     const onTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth',
//             block: 'nearest',
//         });

//     };

//     return (
//         <ReactLenis root>
//             <div id="frame" className="min-w-[1270px]">
//                 <Header />

//                 <PnewItem path={path} />


//                 <Footer onTop={onTop} />
//             </div>

//         </ReactLenis>
//     );

// }

export default function NewsPageItems({ params }) {

    const path = use(params).Newsitems[0];




    const onTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            block: 'nearest',
        });

    };

    return (
        <NewsDetailClient path={path} />
    );

}