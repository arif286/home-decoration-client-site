import axios from 'axios';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = async(data,e) => {
    console.log(data)
    const admin = { ...data }
    admin.role = 'admin';
    try {
      const res = await axios.post("https://interior-design-service.herokuapp.com/addAdmin",admin);
      console.log(res.data)
      e.target.reset();
    } catch (error) {
      console.log(error)
    }
  };
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