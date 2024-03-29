import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink as Link } from "react-router-dom";
import HeaderFunctionalContainer from "../Header/HeaderFunctionalContainer";
import { ProfileProps } from "../Profile/Profile";

const NavbarMain: React.FC<ProfileProps> = (props) => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>Social Network</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={`/profile`}>
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="users2">
                Users
              </Nav.Link>
              <Nav.Link as={Link} to="chat">
                Chat
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/music">
                  Music
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="">Something</NavDropdown.Item>
              </NavDropdown>
              <HeaderFunctionalContainer />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
