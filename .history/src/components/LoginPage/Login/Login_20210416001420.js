import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = ({ setToggle }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data)
    e.preventDefault();
  };
  const handleClick = () => {
  console.log('click me')
}
  return (
    <Container>

      <div className="mt-5 text-center">
        <GoogleLogin />
      </div>
    </Container>
  );
};

export default Login;
