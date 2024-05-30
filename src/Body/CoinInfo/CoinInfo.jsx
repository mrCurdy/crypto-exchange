// import Container from "react-bootstrap/Container";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from "./Chart";
import { getAssetsCoinInfo } from "../../api/assets";
import { getAssetsHistory } from "../../api/assets";
import { intervals } from "./constants";
import { coinPriceMax } from "../utils";
import { coinPriceMin } from "../utils";
import { parseToFixed } from "../utils";

function CoinInfo({ coinData }) {
  // перенёс сюда что бы взять HIGH и LOW значения из chartData
  const [interval] = React.useState(intervals[0]);
  const [chartData, setChartData] = React.useState([]);

  React.useEffect(() => {
    getAssetsHistory(coinData.id, interval).then((json) =>
      setChartData(json.data)
    );
  }, [coinData.id, interval]);

  const priceMax = coinPriceMax(chartData);
  const priceMin = coinPriceMin(chartData);

  const [coinInfo, setCoinInfo] = React.useState({});

  React.useEffect(() => {
    getAssetsCoinInfo(coinData.id).then((json) => setCoinInfo(json.data));
  }, [coinData.id]);

  const formatedVwap24Hr = parseToFixed(coinInfo.vwap24Hr);
  const formatedChangePercent24Hr = parseToFixed(coinInfo.changePercent24Hr);

  return (
    <>
      <Row>
        <Col>
          <Row>
            <Col>Logo</Col>
            <Col>{coinData.name}</Col>
          </Row>
        </Col>
        <Col>
          {/* запросить дополнительные данные */}
          <div>HIGH ${priceMax} </div>
          <div>LOW ${priceMin} </div>
        </Col>
        <Col>
          <div>AVERAGE ${formatedVwap24Hr}</div>
          <div>CHANGE {formatedChangePercent24Hr}%</div>
        </Col>
      </Row>
      <Row>
        <Chart coinData={coinData} chartData={chartData} interval={interval} />
      </Row>
    </>
  );
}

export default CoinInfo;
