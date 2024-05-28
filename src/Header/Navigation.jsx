import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap"; // исправить

function Navigation({ setShowSideBar, setPage }) {
  const handleOnClick = () => {
    setPage("main");
  };
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" onClick={handleOnClick}>
          <img
            alt=""
            src="https://react-bootstrap.netlify.app/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
        <Nav className="me-auto">
          {/* ДЗ при клике на дом переходим домой */}
          <Nav.Link href="#home" onClick={handleOnClick}>
            Home
          </Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Text className="justify-content-end">
          <Button variant="primary" onClick={() => setShowSideBar(true)}>
            Search
          </Button>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Navigation;
