import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactCard() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Email address must be unique !!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          style={{ height: "20vh", resize: "none" }}
          as="textarea"
          aria-label="With textarea"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactCard;
