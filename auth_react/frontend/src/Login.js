import React from 'react';
import { useState } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/users/login', { email, password })
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error.message));
  };

  return (
    <Container className=''>
      <Row className='p-5 m-3'>
        <Col
          md={7}
          className='d-flex justify-content-center align-items-center'
        >
          <Form
            className='login--form'
            onSubmit={handleLogin}
          >
            <h1 className='text-center'>Login</h1>
            <Form.Group
              className='mb-3'
              controlId='formBasicEmail'
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='formBasicPassword'
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
            >
              Login
            </Button>
            <div
              className='py-2 text-center'
              style={{ fontSize: '14px' }}
            >
              <p>
                Not yet have an account? <Link to='/Signup'>Signup</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col
          md={5}
          className='login--bg--container'
        ></Col>
      </Row>
    </Container>
  );
};

export default Login;
