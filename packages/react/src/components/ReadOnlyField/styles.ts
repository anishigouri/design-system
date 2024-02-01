import { styled } from '../../styles'

export const ReadOnlyFieldContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  p: {
    fontSize: '$xs',
    color: '$gray-500',
  },
  span: {
    fontSize: '$sm',
    color: '$gray-900',
  },
})
