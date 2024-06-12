import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext } from "../../providers/AppProvider";

function Main({ data }) {
  const { switchHighlights, globalInfo } = React.useContext(AppContext);

  if (!switchHighlights) return null;

  return (
    <Container>
      <Row className="text-center">
        {data.map(({ children, property, Component }, index) => (
          <Col key={index}>
            {children} <Component value={globalInfo[property]} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Main;
