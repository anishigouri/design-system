import { RiCloseFill } from "react-icons/ri";
import { BottomSheetContainerStyled, CloseButtonStyled, OverlayStyled } from "./styles";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const BottomSheet: React.FC<IProps> = ({ children, isOpen, onClose }) => {

  return (
    <>
      <OverlayStyled isOpen={isOpen} onClick={onClose} />
      <BottomSheetContainerStyled isOpen={isOpen}>
        <CloseButtonStyled onClick={onClose}>
          <RiCloseFill size={25} />
        </CloseButtonStyled>
        {children}
      </BottomSheetContainerStyled>
    </>
  )
}