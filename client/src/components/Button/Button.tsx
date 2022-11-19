import { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "./index";
import { ChildrenFlex, StyledButton } from "./Button.styled";
import ArrowRight from "../../icons/ArrowRight";

const Button: FC<ButtonProps> = ({
  children,
  varient,
  arrow,
  stroke,
  color,
  onClick,
}) => {
  return (
    <StyledButton
      varient={varient}
      stroke={stroke}
      color={color}
      onClick={onClick}
    >
      <ChildrenFlex>
        {children}
        {arrow ? <ArrowRight /> : null}
      </ChildrenFlex>
    </StyledButton>
  );
};

export default Button;
