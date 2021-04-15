import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import './AddService.css';
const AddService = () => {
  return (
    <div>
      <h1 className="text-center">add service</h1>
      <form>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Card className="shadow add-service">
              <label>Service Title</label>
              <input
                class="form-control"
                type="text"
                placeholder="Enter title"
              />
              <label>Description</label>
              <input
                class="form-control"
                type="text"
                placeholder="Enter Description"
              />
              <label>Service Price</label>
              <input
                class="form-control"
                type="number"
                placeholder="Enter Price"
              />
              <label htmlFor="formFile" class="form-label">
                Image
              </label>
              <input class="form-control" type="file" id="formFile" />
            </Card>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default AddService;
