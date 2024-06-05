// import Container from "react-bootstrap/Container";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from "./Chart";
import { getAssetsById } from "../../api/assets";
import "./coinInfo.css";
import ErrorModal from "../../ErrorModal";
import Number from "../Number";

function CoinInfo({ coinData }) {
  const [coinInfo, setCoinInfo] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect(() => {
    getAssetsById(coinData.id)
      .then((json) => setCoinInfo(json.data))
      .catch((error) => setErrorMessage(error.message));
  }, [coinData.id]);
  return (
    <>
      <Row>
        <Col>
          <Col>
            <div className="rank">Rank: {coinInfo.rank}</div>
          </Col>
          <Row>
            <Col>Logo</Col>
            <Col>{coinData.name}</Col>
          </Row>
        </Col>
        <Col>
          <div>
            High <Number value={7000} />
          </div>
          <div>
            Low <Number value={67000} />
          </div>
        </Col>
        <Col>
          <div>
            Avarage 24h <Number value={coinInfo.vwap24Hr} />
          </div>
          <div>
            Change 24h <Number value={coinInfo.changePercent24Hr} />
          </div>
        </Col>
      </Row>
      <Row>
        <Chart coinData={coinData} />
      </Row>
      <ErrorModal
        show={!!errorMessage}
        handleClose={() => setErrorMessage(null)}
        errorMessage={errorMessage}
      />
    </>
  );
}

export default CoinInfo;
