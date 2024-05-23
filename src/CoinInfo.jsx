// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CoinInfo() {
  return (
    <Row>
      <Col>
        <Row>
          <Col>Logo</Col>
          <Col>Bitcoin</Col>
        </Row>
      </Col>
      <Col>
        <div>High 70000</div>
        <div>Low 67000</div>
      </Col>
      <Col>
        <div>Average 69000</div>
        <div>Change -3%</div>
      </Col>
    </Row>
  );
}

export default CoinInfo;
