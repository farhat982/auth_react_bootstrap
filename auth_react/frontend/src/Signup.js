import React from 'react';
import { useState } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/users', {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Row className='p-5 m3'>
        <Col
          md={7}
          className='d-flex justify-content-center align-items-center '
        >
          <Form
            className='signup--form'
            onSubmit={handleSignup}
          >
            <h1>Create your account</h1>
            <Form.Group mb='3'>
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group mb='3'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                autoComplete='on'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                autoComplete='current password'
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
            >
              Create
            </Button>
            <div className='py-4'>
              <p>
                Already have an account? <Link to='/login'>Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col
          md={5}
          className='signup--bg--container'
        ></Col>
      </Row>
    </Container>
  );
};

export default Signup;
