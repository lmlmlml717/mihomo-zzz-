"use client"

import { ReactLenis } from '@studio-freight/react-lenis';
import { useDeviceDetect } from '../hooks/useDeviceDetect';
import { useEffect } from "react";

import { Header } from "../components/Main/Nav/Nav";
import { Home } from "../components/Main/Home/Home";

export default function HomePage() {
  const { isMobile, isPC } = useDeviceDetect();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <ReactLenis root>
      <div id="frame" className="min-w-[1270px] overflow-hidden ">
        <Header />

        <Home />
       
      </div>
    </ReactLenis>
  );
}