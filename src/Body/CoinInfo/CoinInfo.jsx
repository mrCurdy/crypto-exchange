// import Container from "react-bootstrap/Container";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from "./Chart";
import { getAssetsById } from "../../api/assets";
import "./coinInfo.css";
import PriceTag from "../PriceTag";
import Percent from "../Percent";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setErrorMessage } from "../../service/state";

function CoinInfo({ coinData }) {
  const [coinInfo, setCoinInfo] = React.useState({});
  const [pricePoints, setPricePoints] = React.useState({
    high: 0,
    low: 0,
  });
  const dispatch = useDispatch();

  const { id, period } = useParams();

  React.useEffect(() => {
    // coinData? = если коин дата не является обьектом то читать его не будет
    getAssetsById(coinData?.id || id)
      .then((json) => setCoinInfo(json.data))
      .catch((error) => dispatch(setErrorMessage(error.message)));
  }, [coinData?.id, id, dispatch]);
  return (
    <>
      <Row>
        <Col>
          <Col>
            <div className="rank">Rank: {coinInfo.rank}</div>
          </Col>
          <Row>
            <Col>Logo</Col>
            <Col>{coinData?.name}</Col>
          </Row>
        </Col>
        <Col>
          <div>
            High <PriceTag value={pricePoints.high} />
          </div>
          <div>
            Low <PriceTag value={pricePoints.low} />
          </div>
        </Col>
        <Col>
          <div>
            Avarage 24h <PriceTag value={coinInfo.vwap24Hr} />
          </div>
          <div>
            Change 24h <Percent value={coinInfo.changePercent24Hr} />
          </div>
        </Col>
      </Row>
      <Row>
        <Chart
          coinData={coinData || { id }}
          periodParams={period}
          setPricePoints={setPricePoints}
          pricePoints={pricePoints}
        />
      </Row>
    </>
  );
}

export default CoinInfo;
