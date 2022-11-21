import styled from "styled-components";
import bg from "../../assets/backgrounds/login-bg.jpg";

export const Section = styled.section`
  margin: 0;
  display: flex;
`;

export const Title = styled.h2`
  color: #000;
`;

export const Accent = styled.p`
  color: gray;
  margin-bottom: 30px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 210px;
  background: #fff;
`;

export const Right = styled.div`
  flex: 1;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;
