import styled from "styled-components";
import colors from "../../utils/constants/colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: center;
  margin: 20px 0;
  color: ${colors.lightGrayText};
`;

export const Line = styled.div`
  height: 1px;
  width: 150px;
  background-color: ${colors.lightGrayBorder};
`;
