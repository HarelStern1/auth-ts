import { FC, useRef, MouseEvent } from "react";
import signUpSubmit from "../../utils/api/signupSubmit";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const SignUpForm: FC = () => {
  const nameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const user = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    const { accessToken } = await signUpSubmit(user);
    localStorage.setItem("accessToken", accessToken);

    navigate("/dashboard");
  };

  return (
    <Form>
      <Input placeholder="name" ref={nameRef} type="text" />
      <Input placeholder="email" ref={emailRef} type="email" />
      <Input placeholder="password" ref={passwordRef} type="password" />
      <Button onClick={handleSubmit}>Submit</Button>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
