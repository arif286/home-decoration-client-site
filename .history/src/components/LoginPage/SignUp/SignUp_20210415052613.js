import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import Login from "../Login/Login";
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
  const onSubmit = (data) => console.log(data);

  return (
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
            <Login setToggle={setToggle} />
          )}
        </Col>
          </Row>
          <GoogleLogin/>
    </Container>
  );
};

export default SignUp;
