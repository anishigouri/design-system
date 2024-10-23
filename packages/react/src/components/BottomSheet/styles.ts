import { styled } from "@allan-koin/react";

export const BottomSheetContainerStyled = styled('div', {
  position: 'fixed',
  bottom: '-100%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  height: 'auto',
  maxHeight: '80%',
  backgroundColor: '$white',
  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
  transition: 'bottom 0.3s ease-in-out',
  zIndex: '$sheet',
  boxSizing: 'border-box',
  borderTopLeftRadius: '$lg',
  borderTopRightRadius: '$lg',
  padding: '$10 $5',
  overflowY: 'auto',

  variants: {
    isOpen: {
      true: {
        bottom: '0',
      },
      false: {
        bottom: '-100%',
      },
    },
  },
});

export const OverlayStyled = styled('div', {
  display: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '$overlay',
  zIndex: '$overlay',

  variants: {
    isOpen: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
});

export const CloseButtonStyled = styled('button', {
  position: 'absolute',
  top: '$3',
  right: '$3',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '$gray-700'
});