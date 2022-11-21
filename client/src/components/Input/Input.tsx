import { FC, forwardRef } from "react";
import { InputProps } from ".";
import { Container, StyledInput } from "./Input.styled";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type }, ref) => {
    return (
      <Container>
        <StyledInput placeholder={placeholder} ref={ref} type={type} />
      </Container>
    );
  }
);

export default Input;
