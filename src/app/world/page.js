"use client"


import { ReactLenis } from '@studio-freight/react-lenis';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';


import { Header } from "../../components/Main/Nav/Nav";
import { Footer } from "../../components/Main/Footer/Footer";
import { Pworld } from "../../components/Page-world/Pworld";


export default function HomePage() {
  const { isMobile, isPC } = useDeviceDetect();

  return (
    <ReactLenis root>
      <div id="frame" className="min-w-[1270px]">
        <Header />
        <Pworld />
        <Footer />
      </div>

    </ReactLenis>
  );
}