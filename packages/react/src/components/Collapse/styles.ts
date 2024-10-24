import { styled } from "../../styles";

export const CollapseContainerStyled = styled('div', {
  overflow: 'hidden',
});

export const CollapseHeaderStyled = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  fontWeight: '$medium',
  variants: {
    fontSize: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
  }
});

export const CollapseContentStyled = styled('div', {
  overflow: 'hidden',
  transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out',
  maxHeight: 0,
  opacity: 0,

  variants: {
    isOpen: {
      true: {
        maxHeight: '500px',
        opacity: 1,
      },
      false: {
        maxHeight: 0,
        opacity: 0,
      },
    },
  },
});