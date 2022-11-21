import { FC } from "react";
import { GoogleSignInButtonProps } from ".";
import { StyledButton } from "./GoogleSignInButton.styled";
import { FcGoogle } from "react-icons/fc";

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  return (
    <StyledButton>
      <FcGoogle size={20} /> {children}
    </StyledButton>
  );
};

export default GoogleSignInButton;
