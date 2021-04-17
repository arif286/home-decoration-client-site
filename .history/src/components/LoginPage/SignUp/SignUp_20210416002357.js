import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import NavBar from "../../HomePage/NavBar/NavBar";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { initializeLoginFirebase } from "../Login/LoginManager";
import "./SignUp.css";

const SignUp = () => {
  const [toggle, setToggle] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  initializeLoginFirebase();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={10} md={8}>
            {!toggle ? (
              <form
                className="login-form shadow"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h3>Create an account</h3>
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                  placeholder="First Name"
                />

                <input
                  type="text"
                  {...register("lastName", { required: true })}
                  placeholder="Last Name"
                />

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
                <input
                  type="password"
                  {...register("confirmation", {
                    validate: (value) =>
                      value === password.current || "password do not match",
                  })}
                  placeholder="Confirm Password"
                />
                {errors.confirmation && <p>{errors.confirmation.message}</p>}

                <button type="submit" className="w-100 submit-btn">
                  Create an account
                </button>
                <p className="text-center mt-4">
                  Already have an account?{" "}
                  <span
                    onClick={() => {
                      setToggle(true);
                    }}
                  >
                    Login
                  </span>
                </p>
              </form>
            ) : (
              <form
                className="login-form shadow"
                onSubmit={handleSubmit(onSubmit)}
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
                  <NavLink to="/resetPassword" className="reset-password">
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
            )}
          </Col>
        </Row>
        <div className="mt-5 text-center">
          <GoogleLogin />
        </div>
      </Container>
    </>
  );
};

export default SignUp;
