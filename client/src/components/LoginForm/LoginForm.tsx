import { FC, useRef, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginSubmit from "../../utils/api/loginSubmit";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

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

    const { accessToken } = await loginSubmit(user);
    localStorage.setItem("accessToken", accessToken);

    navigate("/dashboard");
  };

  return (
    <Form>
      <Input placeholder="email" refProp={emailRef} />
      <Input placeholder="password" refProp={passwordRef} />
      <Button arrow varient="submit" onClick={handleSubmit}>
        Submit
      </Button>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </Form>
  );
};

export default LoginForm;
