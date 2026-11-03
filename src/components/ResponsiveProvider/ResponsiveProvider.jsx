"use client"

import React from 'react';
import { useResponsiveFontSize } from '@/hooks/useResponsiveFontSize';
import { useState } from 'react';

export function ResponsiveProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 模拟加载过程，实际应用中可以根据需要进行调整
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // 假设加载需要500毫秒

    // 组件卸载时清除定时器
    return () => {
      clearTimeout(timer);
    };
  }, []);

   // 在加载完成前显示动画loading界面
  if (!isLoaded) {
    return null;
  }

  // 加载完成后显示实际内容
  return <>{children}</>;
}
