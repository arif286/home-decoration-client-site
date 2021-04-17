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
      .post("https://interior-design-service.herokuapp.com/review", eventData)
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
      <h3 className='text-center mt-2'>Reviews</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 review-form">
        <Row>
          <Col md={7} lg={6}>
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
              style={{height:'100px'}}
              className="form-control mb-4"
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
