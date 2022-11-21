import { FC } from "react";
import GoogleSignInButton from "../../components/GoogleSignInButton/GoogleSignInButton";
import Input from "../../components/Input/Input";
import LoginForm from "../../components/LoginForm/LoginForm";
import Or from "../../components/Or/Or";
import { Accent, Section, Title } from "./Login.styled";

const Login: FC = () => {
  return (
    <Section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "250px 200px",
          background: "#fff",
        }}
      >
        <Title>Login</Title>
        <Accent>Enter your credentials to acces your account.</Accent>
        <GoogleSignInButton>Sign In with Google</GoogleSignInButton>
        <Or />
        <LoginForm />
      </div>
      <div style={{ flex: "1" }}>
        <p>Right</p>
      </div>
    </Section>
  );
};

export default Login;
