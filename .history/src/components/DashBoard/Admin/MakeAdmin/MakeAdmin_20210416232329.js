import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <Row className="">
            <Col md={8} lg={6}>
              <Card.Body>
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="example@gmail.com"
                  {...register('email',{required:true})}
                />
                <button className="admin-button" type="submit">
                  Submit
                </button>
              </Card.Body>
            </Col>
          </Row>
        </form>
      </div>
    );
};

export default MakeAdmin;