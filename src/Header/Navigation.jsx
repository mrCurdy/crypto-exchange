import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShowSideBar } from "../service/state";
import Form from "react-bootstrap/Form";
import { AppContext } from "../providers/AppProvider";

function Navigation() {
  const appContext = React.useContext(AppContext);

  const dispatch = useDispatch();

  return (
    <Navbar className="bg-body-tertiary" expand="md">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <img
            alt=""
            src="https://react-bootstrap.netlify.app/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto my-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/contact/">
                Contact
              </Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Text className="justify-content-end d-flex align-items-center">
              <Form>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label="Highlights"
                  className="me-2"
                  checked={appContext.switchHighlights}
                  onChange={() =>
                    appContext.setSwitchHighlights((oldValue) => !oldValue)
                  }
                />
              </Form>
              <Button
                variant="primary"
                className="w-100"
                onClick={() => dispatch(setShowSideBar(true))}
              >
                Search
              </Button>
            </Navbar.Text>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
