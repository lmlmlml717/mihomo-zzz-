"use client"

import React from 'react';
import { useResponsiveFontSize } from '@/hooks/useResponsiveFontSize';

export function ResponsiveProvider({ children }) {
  const isLoaded = useResponsiveFontSize();

  // 在加载完成前显示动画loading界面
  if (!isLoaded) {
    return null;
  }

  // 加载完成后显示实际内容
  return <>{children}</>;
}