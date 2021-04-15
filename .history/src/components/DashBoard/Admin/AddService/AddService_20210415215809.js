import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const AddService = () => {
  return (
    <div>
      <h1 className="text-center">add service</h1>
      <form>
        <Row className='justify-content-center mt-5'>
          <Col md={8}>
            <Card>
              <label>Service Title</label>
              <input type="text" placeholder="Enter title" />
              <label>Description</label>
              <input type="text" placeholder="Enter Description" />
              <label>Service Price</label>
              <input type="number" placeholder="Enter Price" />
              <label>Image</label>
              <input type="file" placeholder="Enter Price" />
            </Card>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default AddService;
