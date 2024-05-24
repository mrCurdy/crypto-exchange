import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SubHeader() {
  return (
    <Container>
      <Row>
        <Col>MARKET CAP $2.49T</Col>
        <Col>EXCHANGE VOL $57.85B</Col>
        <Col>ASSETS 2,297</Col>
        <Col>EXCHANGES 73</Col>
        <Col>MARKETS 9,066</Col>
        <Col>BTC DOM INDEX 53.9%</Col>
      </Row>
    </Container>
  );
}
export default SubHeader;
