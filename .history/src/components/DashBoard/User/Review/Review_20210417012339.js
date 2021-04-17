import axios from "axios";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './Review.css';
const Review = () => {
  const {
    handleSubmit,
    register,
    reset
  } = useForm();
 const [imageURL, setImageURL] = useState(null);

  const onSubmit = async (data, e) => {
    console.log(data)
    const eventData = { ...data }
    eventData.image = await imageURL;
    axios
      .post("http://localhost:5000/review", eventData)
      .then((res) => {
        console.log(res.data)
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
   const handleImageUpload = async (e) => {
     const imageData = new FormData();
     imageData.set("key", "942050dfcb705181c689da936974de62");
     imageData.append("image", e.target.files[0]);

     try {
       const response = await axios.post(
         "https://api.imgbb.com/1/upload",
         imageData
       );
       console.log(response);
       const image = response.data.data.display_url;
       setImageURL(image);
     } catch (error) {
       console.log(error);
     }
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
            <textarea
              className="form-control"
              // type="text"
              placeholder="Description"
              {...register("Description", { required: true })}
            />
            <input
              className="form-control"
              type="file"
              onChange={handleImageUpload}
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
