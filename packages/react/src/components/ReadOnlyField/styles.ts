import { styled } from '../../styles'

export const ReadOnlyFieldContainer = styled('div', {
  fontFamily: '$default',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  p: {
    fontSize: '$xs',
    color: '$gray-500',
    padding: 0,
    margin: 0
  },
  span: {
    fontSize: '$sm',
    color: '$gray-900',
    fontWeight: '$medium'
  },
})
