import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './Review.css';
const Review = () => {
  const {
    handleSubmit,
    register,
    reset
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    axios
      .post("https://interior-design-service.herokuapp.com/review", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Reviews</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 review-form">
        <Row>
          <Col md={6}>
            <input
              className="form-control"
              type="text"
              placeholder="Your name"
              {...register("name", { required: true })}
            />
            <input
              className="form-control"
              type="text"
              placeholder="Company's name, Designation"
              {...register("companyName", { required: true })}
            />
            <input
              className="form-control"
              type="text"
              placeholder="Description"
              {...register("Description", { required: true })}
            />
            <button className="admin-button" type="submit">
              submit
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Review;
