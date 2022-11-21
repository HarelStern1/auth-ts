import { FC } from "react";
import { GoogleSignInButtonProps } from ".";
import { StyledButton } from "./GoogleSignInButton.styled";

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  return <StyledButton>Google {children}</StyledButton>;
};

export default GoogleSignInButton;
