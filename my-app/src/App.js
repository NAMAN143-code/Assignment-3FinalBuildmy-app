import React from 'react';
import './App.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Trip from './components/Trip';
import Trips from './components/Trips';
import About from './components/About';
import NotFound from './components/NotFound';


function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>New York Citibike Trips</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/trips">
              <Nav.Link>Full List</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />

      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path='/' element={<Trips />} />
              <Route path='/About' element={<About />} />
              <Route path='/Trip/id' render={(props) => (
                <Trip id={props.match.params.id} viewedTrip={this.viewedTrip} />
              )} />
              <Route path="*" element={<NotFound />} />

            </Routes>
          </Col>
        </Row>
      </Container>
      <br /><br />
    </>

  );
}

export default App;