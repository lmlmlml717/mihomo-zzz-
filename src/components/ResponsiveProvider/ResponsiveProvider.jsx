"use client"

import React from 'react';
import { useResponsiveFontSize } from '@/hooks/useResponsiveFontSize';
import { useState } from 'react';

export function ResponsiveProvider({ children }) {
 
  useResponsiveFontSize();
 
  return <>{children}</>;
}
