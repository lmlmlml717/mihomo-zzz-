"use client"

import React from 'react';
import { useResponsiveFontSize } from '@/hooks/useResponsiveFontSize';

export function ResponsiveProvider({ children }) {
  useResponsiveFontSize();
  
  return <>{children}</>;
}