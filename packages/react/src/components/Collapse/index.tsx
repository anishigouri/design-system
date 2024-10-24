import { ElementType, FC, useState } from 'react';
import { CaretDown, CaretUp } from '@phosphor-icons/react';

import { CollapseContainerStyled, CollapseContentStyled, CollapseHeaderStyled } from './styles';

export interface ICollapseProps {
  title: string;
  children: React.ReactNode;
  iconOpen?: ElementType;
  iconClose?: ElementType;
  color?: string
  colorIcon?: string
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
}

export const Collapse: FC<ICollapseProps> = ({ 
  title, 
  children, 
  iconOpen = CaretUp, 
  iconClose = CaretDown, 
  color = 'gray-800', 
  colorIcon = 'gray-800',
  fontSize = 'md'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = isOpen ? iconOpen : iconClose;

  return (
    <CollapseContainerStyled>
      <CollapseHeaderStyled fontSize={fontSize} onClick={() => setIsOpen(!isOpen)}>
        <span color={color}>{title}</span>
        <Icon color={colorIcon} size={15} />
      </CollapseHeaderStyled>
      <CollapseContentStyled isOpen={isOpen}>
        {children}
      </CollapseContentStyled>
    </CollapseContainerStyled>
  )
}