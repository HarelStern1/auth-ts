import { FC } from "react";
import { InputProps } from ".";
import { Container, StyledInput } from "./Input.styled";

const Input: FC<InputProps> = ({ placeholder, refProp }) => {
  return (
    <Container>
      <StyledInput placeholder={placeholder} ref={refProp} />
    </Container>
  );
};

export default Input;
