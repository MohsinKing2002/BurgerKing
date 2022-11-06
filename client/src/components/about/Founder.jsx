import Card from 'react-bootstrap/Card';
import me from "../../assets/me.png";

function Founder() {
  return (
    <Card className="text-center bg-transparent">
      <Card.Body>
        <Card.Img src={me} alt="founder" />
        <Card.Title className="fw-bold my-2 fs-3">Mohsin King</Card.Title>
        <Card.Text>
            Hey Buddies, <br />
            I'm the Developer of Burger King Application. <br />
            We are here to serve you the best Burger in taste.. <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Founder;