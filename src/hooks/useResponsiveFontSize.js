'use client';

import { useEffect } from 'react';
export function useResponsiveFontSize() {
 
  const breakpoints = [
    { width: 1270, fontSize: 49.6093 },
    { width: 1440, fontSize: 56.25 },
    { width: 1488, fontSize: 58.125 },
    { width: 1920, fontSize: 75 },
    { width: 2560, fontSize: 100 }
  ];

  const calculateFontSize = (width) => {
     if (width <= breakpoints[0].width) {
      return breakpoints[0].fontSize;
    }
    
     if (width >= breakpoints[breakpoints.length - 1].width) {
      return breakpoints[breakpoints.length - 1].fontSize;
    }
    
    for (let i = 0; i < breakpoints.length - 1; i++) {
      const point1 = breakpoints[i];
      const point2 = breakpoints[i + 1];
      
      if (width >= point1.width && width <= point2.width) {
        const ratio = (width - point1.width) / (point2.width - point1.width);
        return point1.fontSize + (point2.fontSize - point1.fontSize) * ratio;
      }
    }
    
    return breakpoints[0].fontSize;
  };

  const detectDevice = () => {
    if (typeof window === 'undefined') return 'pc';
    return window.innerWidth >= 768 ? 'pc' : 'mobile';
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateFontSize = () => {
      const width = window.innerWidth;
      const fontSize = calculateFontSize(width);
      const deviceType = detectDevice();
      
      document.documentElement.style.fontSize = `${fontSize}px`;
      document.documentElement.className = deviceType;
    };

    updateFontSize();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateFontSize, 33);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
}
