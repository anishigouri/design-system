import { ElementType, FC, useEffect, useState } from 'react';
import { CaretDown, CaretUp } from '@phosphor-icons/react';

import { CollapseContainerStyled, CollapseContentStyled, CollapseHeaderStyled, TitleHeaderStyled } from './styles';

export interface ICollapseProps {
  title: string;
  children: React.ReactNode;
  iconOpen?: ElementType;
  iconClose?: ElementType;
  color?: string
  colorIcon?: string
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
  fontWeight?: 'regular' | 'medium' | 'semiBold' | 'bold'
  isOpen?: boolean
}

export const Collapse: FC<ICollapseProps> = ({ 
  title, 
  children, 
  iconOpen = CaretUp, 
  iconClose = CaretDown, 
  color = 'gray-800', 
  colorIcon = 'gray-800',
  fontSize = 'md',
  fontWeight = 'regular',
  isOpen = false
}) => {
  const [open, setOpen] = useState(false);

  const Icon = open ? iconOpen : iconClose;

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <CollapseContainerStyled>
      <CollapseHeaderStyled onClick={() => setOpen(!open)}>
        <div style={{color}}>
          <TitleHeaderStyled fontWeight={fontWeight} fontSize={fontSize}>{title}</TitleHeaderStyled>
        </div>
        <Icon color={colorIcon} size={15} />
      </CollapseHeaderStyled>
      <CollapseContentStyled isOpen={open}>
        {children}
      </CollapseContentStyled>
    </CollapseContainerStyled>
  )
}