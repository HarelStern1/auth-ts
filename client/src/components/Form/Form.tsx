import { FC } from "react";
import { FormProps } from ".";
import { StyledForm } from "./Form.styled";

const Form: FC<FormProps> = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

export default Form;
