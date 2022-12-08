import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/portfolio.css"

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="fixed-top navbar-custom">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="Iterative-Design">Iterative Design</NavDropdown.Item>
              <NavDropdown.Item href="Responsive-Redesign">
                Responsive Redesign
              </NavDropdown.Item>
              <NavDropdown.Item href="Personas-Storyboarding">Personas & Storyboarding</NavDropdown.Item>
              <NavDropdown.Item href="Development">
                Development
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        </Navbar>
    );
}

export default NavBar;