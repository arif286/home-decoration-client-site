import axios from "axios";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
  const [imageURL, setImageURL] = useState(null);
  const [updateProduct, setUpdateProduct] = useState(false);
   const {
     register,
     handleSubmit,
     formState: { errors },
  } = useForm();

  const onSubmit = async(data,e) => {
    console.log(data)
    const eventData = {
      title: data.title,
      text: data.description,
      price: data.price,

    };
    eventData.image = await imageURL;
    try {
      const response = await axios.post("https://interior-design-service.herokuapp.com/addService", eventData);
      e.target.reset();
      setUpdateProduct(response.data);
    } catch (error) {
      console.log(error)
    }


  }

  const handleImageUpload = async (e) => {
    const imageData = new FormData();
    imageData.set("key", "942050dfcb705181c689da936974de62");
    imageData.append("image", e.target.files[0]);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        imageData
      );
      console.log(response)
      const image = response.data.data.display_url;
      setImageURL(image);
    } catch (error) {

      console.log(error);

    }
  }

  return (
    <div>
      <h1 style={{ textTransform: "capitalize" }} className="text-center">
        add service
      </h1>
      <form className="text-right" onSubmit={handleSubmit(onSubmit)}>
        <Row className="justify-content-center mt-5">
          <Col md={7}>
            <Card className="shadow add-service">
              <label>Service Title</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter title"
                {...register("title", {
                  required: true,
                })}
              />

              <label>Service Price</label>
              <input
                className="form-control"
                type="number"
                placeholder="Enter Price"
                {...register("price", {
                  required: true,
                })}
              />
              <label>Description</label>
              <textarea
                style={{height:'100px'}}
                className="form-control"
                placeholder="Enter Description"
                {...register("description", {
                  required: true,
                })}
              />
              <label htmlFor="formFile" className="form-label">
                Image
              </label>
              <input type="file" id="formFile" onChange={handleImageUpload} />
            </Card>
            <input type="submit" className="admin-button" />
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default AddService;
