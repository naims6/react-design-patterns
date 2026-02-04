import Card from "./card/Card";

const CompoundWithCard = () => {
  return (
    <Card>
      <Card.Header>Welcome</Card.Header>

      <Card.Body>This is a simple card</Card.Body>

      <Card.Footer>
        <button>OK</button>
      </Card.Footer>
    </Card>
  );
};

export default CompoundWithCard;
