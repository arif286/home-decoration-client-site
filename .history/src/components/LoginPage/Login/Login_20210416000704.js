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
      <form
        className="login-form shadow"
        onSubmit={() => {
          handleSubmit(onSubmit);
        }}
      >
        <h3>Login</h3>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        <div className="d-flex justify-content-between">
          <div>
            <input
              style={{ width: "15px", marginRight: "10px" }}
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              value="Bike"
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <NavLink to="" className="reset-password">
            Forgot password
          </NavLink>
        </div>
        <button type="submit" className="w-100 submit-btn">
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account?
          <span
            onClick={handleClick}
          >
            Create an account
          </span>
        </p>
      </form>
      <div className="mt-5 text-center">
        <GoogleLogin />
      </div>
    </Container>
  );
};

export default Login;
