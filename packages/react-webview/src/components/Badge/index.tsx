
import React from 'react';
import { BadgeContainer } from './styles';

export interface BadgeProps {
  backgroundColor?: string
  color?: string 
  children: React.ReactNode
}

export function Badge({backgroundColor = '$green-600', children, color = '$white'}: BadgeProps) {
  return (
    <BadgeContainer css={{backgroundColor, color}}>
      {children}
    </BadgeContainer>
  )
}

Badge.displayName = 'Badge'