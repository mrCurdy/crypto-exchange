import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main({ data }) {
  return (
    <Container>
      <Row>
        {/* нужно дать уникальный ключь иначе для реакта он один и тот же, и возникает ошибка */}
        {data.map(({ children, value }, index) => (
          <Col className="text-center" key={index}>
            {children}
            <br />
            {value}
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Main;
