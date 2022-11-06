import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHamburger, FaCartPlus } from "react-icons/fa";

function Header() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand}>
          <Container fluid>
            <Navbar.Brand>
              <motion.div
                initial={{
                  x: "-100%",
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
              >
                <NavLink className="text-decoration-none text-light" to="/">
                  <FaHamburger className="mx-3" size={30} /> Burger King
                </NavLink>
              </motion.div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <FaHamburger className="ms-3" size={30} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={NavLink} to="/">
                    {" "}
                    Home{" "}
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/about">
                    {" "}
                    About{" "}
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/contact">
                    {" "}
                    Contact{" "}
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/account">
                    {" "}
                    Account{" "}
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/cart">
                    {" "}
                    <FaCartPlus size={26} />{" "}
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
