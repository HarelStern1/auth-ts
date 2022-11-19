import styled from "styled-components";
import { ButtonProps } from ".";

const varientMap = {
  primary: "blue",
  secondary: "yellow",
  default: "green",
  submit: "purple",
};

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ stroke }) => (stroke ? "1px solid gray" : "none")};
  background-color: ${({ stroke, varient }) => {
    if (stroke) {
      return "transparent;";
    } else if (varient) {
      return varientMap[varient];
    }
  }};
  color: ${({ color }) => (color ? color : "#fff")};
  border-radius: 4px;
  padding: 10px 20px;
  height: 34px;
  cursor: pointer;

  &:hover {
    > div > figure {
      left: 2px;
    }
  }
`;

export const ChildrenFlex = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
`;
