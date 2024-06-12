import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getGlobalInfo } from "../../api/assets";
import { AppContext } from "../../providers/AppProvider";

function Main() {
  const { switchHighlights } = React.useContext(AppContext);

  if (!switchHighlights) return null;

  // const [globalInfo, setGlobalInfo] = React.useState({});
  // const [errorMessage, setErrorMessage] = React.useState(null);

  // React.useEffect(() => {
  //   getGlobalInfo()
  //     .then((json) => setGlobalInfo(json.data))
  //     .catch((error) => setErrorMessage(error.message));
  //   console.log(globalInfo);
  //   console.log(errorMessage);
  // }, []);

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <p>MARKET CAP</p>
          <br />
          {/* <p>{globalInfo.market_cap_usd}</p> */}
        </Col>
      </Row>
    </Container>
  );
}
export default Main;
