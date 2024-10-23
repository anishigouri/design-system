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
}

export const Collapse: FC<ICollapseProps> = ({ 
  title, 
  children, 
  iconOpen = CaretUp, 
  iconClose = CaretDown, 
  color = 'gray-800', 
  colorIcon = 'gray-800' 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = isOpen ? iconOpen : iconClose;

  return (
    <CollapseContainerStyled>
      <CollapseHeaderStyled onClick={() => setIsOpen(!isOpen)}>
        <span style={{color}}>{title}</span>
        <Icon color={colorIcon} size={15} />
      </CollapseHeaderStyled>
      <CollapseContentStyled isOpen={isOpen}>
        {children}
      </CollapseContentStyled>
    </CollapseContainerStyled>
  )
}