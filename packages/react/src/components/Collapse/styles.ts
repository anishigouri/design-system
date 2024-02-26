import { styled } from "../../styles";

export const CollapseContainerStyled = styled('div', {
  overflow: 'hidden',
});

export const CollapseHeaderStyled = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  fontSize: '$sm',
  fontWeight: '$medium',
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