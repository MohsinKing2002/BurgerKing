import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const loginHandler = () => {
    window.open("http://localhost:5000/googleAuth", "_self");
  };

  return (
    <div className="register bg-light my-5 text-center rounded">
      <h1 className="title my-2 heading">User Sign-In</h1>
      <br />
      <Form>
        <FloatingLabel label="Email address" className="mb-4">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel label="Password" className="mb-4">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <hr />

      <figure>
        <blockquote className="blockquote bg-info bg-opacity-10 py-1">
          <button className="login_btn" onClick={loginHandler}>
            Login with <FcGoogle className="ms-1" size={26} />
          </button>
        </blockquote>
      </figure>

      <hr />
      <figure>
        <figcaption className="blockquote-footer mt-1">
          Dont't have account ? <NavLink to="/register">Register</NavLink>
        </figcaption>
      </figure>
    </div>
  );
}

export default Login;
