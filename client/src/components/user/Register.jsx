import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Register() {
  return (
    <div className="register bg-light my-4 text-center rounded">
      <h1 className="title my-2 heading">User Registration</h1>
      <br />
      <Form>
        <FloatingLabel label="Your Name" className="mb-4">
          <Form.Control type="text" placeholder="Mr John" />
        </FloatingLabel>

        <FloatingLabel label="Email address" className="mb-4">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel label="Password" className="mb-4">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <hr />
      <figure>
        <blockquote class="blockquote bg-info bg-opacity-10 py-1">
          <button className="login_btn">
            Login with <FcGoogle className="ms-1" size={26} />
          </button>
        </blockquote>
      </figure>

      <hr />
      <figure>
        <figcaption className="blockquote-footer mt-1">
          Already registered ? <NavLink to="/login">Login</NavLink>
        </figcaption>
      </figure>
    </div>
  );
}

export default Register;
