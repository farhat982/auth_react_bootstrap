import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarCom = () => {
  function handleLogout() {
    console.log(handleLogout);
  }

  return (
    <Navbar
      bg='light'
      expand='lg'
    >
      <Container>
        <Navbar.Brand href='/'>
          <h3>Blog-MongoDB</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='Login'>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='Signup'>
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <NavDropdown
              title='email'
              id='basic-nav-dropdown'
            >
              <LinkContainer to='/new-article'>
                <NavDropdown.Item>New Article</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/my-articles'>
                <NavDropdown.Item>My Articles</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <Button
                onClick={handleLogout}
                variant='outline-danger'
              >
                Logout
              </Button>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCom;
