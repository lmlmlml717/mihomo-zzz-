
"use client"
import { ReactLenis } from '@studio-freight/react-lenis';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';




import { Header} from "@/components/Main/Nav/Nav";
import { Footer } from "@/components/Main/Footer/Footer";
import { Pwitem } from "@/components/Page-world/Pwitem";

import Pworlds from '@/utils/Page/Pworlds';



export default function HomePage() {
  const { isMobile, isPC } = useDeviceDetect();

  const item = Pworlds[2];
  const { h, p, bimg } = item;


  return (
    <ReactLenis root>
      <div id = "frame" className="min-w-[1270px]"> 
        <Header />
        <Pwitem h={h} p={p} bimg={bimg} />
        <Footer />
      </div> 

    </ReactLenis>
  );
}