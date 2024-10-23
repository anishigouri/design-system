import React from 'react'
import { BadgeContainer } from './styles'

export interface BadgeProps {
  color?: string
  children: React.ReactNode
  type?: 'primary' | 'secondary'
}

export function Badge({
  color = '$green-600',
  children,
  type = 'primary',
}: BadgeProps) {
  const isPrimary = type === 'primary'
  const dynamicStyles = {
    backgroundColor: isPrimary ? `${color}` : 'transparent',
    color: isPrimary ? '$white' : `${color}`,
    ...(type === 'secondary' && { border: `1.5px solid ${color}` }),
  }

  return <BadgeContainer css={dynamicStyles}>{children}
  
  </BadgeContainer>
}

Badge.displayName = 'Badge'
