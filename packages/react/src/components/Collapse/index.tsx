import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { ElementType, FC, useState } from 'react';
import { CollapseContainerStyled, CollapseContentStyled, CollapseHeaderStyled } from './styles';

interface ICollapseProps {
  title: string;
  children: React.ReactNode;
  iconOpen?: ElementType;
  iconClose?: ElementType;
}

export const Collapse: FC<ICollapseProps> = ({ title, children, iconOpen = CaretUp, iconClose = CaretDown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = isOpen ? iconOpen : iconClose;

  return (
    <CollapseContainerStyled>
      <CollapseHeaderStyled onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <Icon color="#1e1e1e" size={15} />
      </CollapseHeaderStyled>
      <CollapseContentStyled isOpen={isOpen}>
        {children}
      </CollapseContentStyled>
    </CollapseContainerStyled>
  )
}