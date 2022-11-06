import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHamburger, FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="footer">
      <Navbar bg="dark" variant="dark">
        <Container>
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
              <FaHamburger className="mx-3" size={30} /> Burger King
            </motion.div>
          </Navbar.Brand>
          <Nav className="flex-column">
            <h6 className="text-info ms-4">Quick Links</h6>
            <Nav.Link className="fs-6" as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="fs-6" as={NavLink} to="/about">
              About us
            </Nav.Link>
            <Nav.Link className="fs-6" as={NavLink} to="/contact">
              Contact us
            </Nav.Link>
          </Nav>

          <Nav className="flex-column">
            <h6 className="text-info ms-4">User Needs</h6>
            <Nav.Link className="fs-6" as={NavLink} to="/account">
              My Account
            </Nav.Link>
            <Nav.Link className="fs-6" as={NavLink} to="/cart">
              <FaCartPlus size={25} />
            </Nav.Link>
            <Nav.Link className="fs-6" as={NavLink} to="/about">
              Founder
            </Nav.Link>
          </Nav>

          <Nav className="flex-column">
            <h6 className="text-info ms-4">Developer</h6>
            <Nav.Link className="fs-6" as={NavLink} to="/account">
              LinkedIn
            </Nav.Link>
            <Nav.Link className="fs-6" as={NavLink} to="/account">
              GitHub
            </Nav.Link>
            <Nav.Link className="fs-6" as={NavLink} to="/account">
              Leetcode
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
