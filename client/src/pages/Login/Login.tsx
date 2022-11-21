import { FC } from "react";
import GoogleSignInButton from "../../components/GoogleSignInButton/GoogleSignInButton";
import Input from "../../components/Input/Input";
import LoginForm from "../../components/LoginForm/LoginForm";
import Or from "../../components/Or/Or";
import login from "../../assets/img/9.jpg";
import { Accent, Left, Right, Section, Title } from "./Login.styled";

const Login: FC = () => {
  return (
    <Section>
      <Left>
        <Title>Login</Title>
        <Accent>Enter your credentials to acces your account.</Accent>
        <GoogleSignInButton>Sign In with Google</GoogleSignInButton>
        <Or />
        <LoginForm />
      </Left>
      <Right>{/* <img src={login} height="500px" width="500px" /> */}</Right>
    </Section>
  );
};

export default Login;
