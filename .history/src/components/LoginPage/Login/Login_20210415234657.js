import React from "react";
// import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Login = ({ setToggle,register,onSubmit}) => {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data);

  return (
    <form
      className="login-form shadow"
      onSubmit={onSubmit}
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
          onClick={() => {
            setToggle(false);
          }}
        >
          Create an account
        </span>
      </p>
    </form>
  );
};

export default Login;
