import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$green-700',
  },

  variants: {
    variant: {
      primary: {
        color: '$gray-900',
        backgroundColor: '$green-700',
        border: '2px solid $green-700',

        transition: '0.2s background',

        '&:not(:disabled):hover': {
          background: '$green-600',
        },

        '&:disabled': {
          backgroundColor: '$gray-200',
          color: '$gray-500',
          border: '2px solid $gray-200'
        },
      },

      secondary: {
        color: '$white',
        backgroundColor: '$gray-950',
        border: '2px solid $gray-950',

        transition: '0.2s background',

        '&:not(:disabled):hover': {
          background: '$gray-900',
        },

        '&:disabled': {
          backgroundColor: '$gray-200',
          color: '$gray-500',
          border: '2px solid $gray-200'
        },
      },
    },

    outlined: {
      true: {
        backgroundColor: 'transparent',

        '&:not(:disabled):hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      css: {
        borderColor: '$green-700',
        color: '$green-700',
        backgroundColor: 'transparent'
      }
    },
    {
      variant: 'secondary',
      outlined: true,
      css: {
        borderColor: '$gray-950',
        color: '$gray-950',
        backgroundColor: 'transparent'
      }
    },
  ],

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'