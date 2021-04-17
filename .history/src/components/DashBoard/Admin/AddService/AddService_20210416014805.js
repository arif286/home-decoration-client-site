import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
   const {
     register,
     handleSubmit,
     watch,
     formState: { errors },
   } = useForm();
  const onSubmit = (data) => console.log(data);

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

  return (
    <div>
      <h1 style={{ textTransform: "capitalize" }} className="text-center">
        add service
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className="justify-content-center mt-5">
          <Col md={7}>
            <Card className="shadow add-service">
              <label>Service Title</label>
              <input
                class="form-control"
                type="text"
                placeholder="Enter title"
                {...register("title", {
                  required: true,
                })}
              />
              <label>Description</label>
              <input
                class="form-control"
                type="text"
                placeholder="Enter Description"
                {...register("description", {
                  required: true,
                })}
              />
              <label>Service Price</label>
              <input
                class="form-control"
                type="number"
                placeholder="Enter Price"
                {...register("price", {
                  required: true,
                })}
              />
              <label htmlFor="formFile" class="form-label">
                Image
              </label>
              <input
                class="form-control"
                type="file"
                id="formFile"
                onChange={handleImageUpload}
              />
            </Card>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default AddService;
