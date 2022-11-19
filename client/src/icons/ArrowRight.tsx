import styled from "styled-components";

const Wrapper = styled.figure`
  position: relative;
  left: 0px;
  transition: 0.2s ease;
  margin: 0;
  display: flex;
  align-items: center;
`;

const ArrowRight = () => {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-right"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </Wrapper>
  );
};

export default ArrowRight;
