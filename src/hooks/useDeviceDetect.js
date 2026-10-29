
'use client';

import { useEffect, useState } from 'react';

export function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPC, setIsPC] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      const mobileRegex = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      
      const mobile = mobileRegex.test(userAgent);
      const pc = window.innerWidth >= 1024;
      
      setIsMobile(mobile);
      setIsPC(pc);
    };

    checkDevice();
    
    const handleResize = () => {
      checkDevice();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isPC };
}