import styled from "styled-components";
import { ButtonProps } from ".";
import colors from "../../utils/constants/colors";

const varientMap = {
  primary: colors.blue,
  secondary: "yellow",
  default: "green",
  submit: "orange",
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
  height: 48px;
  width: 342px;
  font-size: 14px;
  font-weight: 500;
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
  gap: 8px;
  align-items: center;
`;
