import { FC, useRef, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginSubmit from "../../utils/api/loginSubmit";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { CheckboxContainer } from "./LoginForm.styled";

const LoginForm: FC = () => {
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const user = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    console.log(user);
    const { accessToken } = await loginSubmit(user);
    localStorage.setItem("accessToken", accessToken);

    navigate("/dashboard");
  };

  const togglePasswordType = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  return (
    <Form>
      <Input placeholder="email" type="email" ref={emailRef} />
      <Input placeholder="password" type="password" ref={passwordRef} />
      <CheckboxContainer>
        <input type="checkbox" onClick={togglePasswordType} />
        <p>Show password</p>
      </CheckboxContainer>
      <Button arrow varient="primary" onClick={handleSubmit}>
        Login to Your Account
      </Button>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </Form>
  );
};

export default LoginForm;
