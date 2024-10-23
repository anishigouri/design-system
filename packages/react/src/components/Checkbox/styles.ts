import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$white',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid $gray-400',

  '&[data-state="checked"]': {
    backgroundColor: '$green-600',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $green-300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$green-500',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
