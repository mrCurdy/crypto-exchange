import Table from "react-bootstrap/Table";
import React from "react";
import CoinInfoModal from "./CoinInfo/CoinInfoModal";
import { getAssets } from "../api/assets";
import { coinDataFormat } from "./utils";
import ErrorModal from "../ErrorModal";
import Number from "./Number";

function CoinsList({ setPage }) {
  const [showInfoModal, setShowInfoModal] = React.useState(false);
  const [coinData, setCoinData] = React.useState({});
  const [coinList, setCoinList] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(null);
  // после изменения состояния функции перезапускаются, поэтому для хапросов своя фича useEffect
  const handleOnClick = (coin) => {
    setShowInfoModal(true);
    setCoinData(coin);
  };
  // срабатывает после запуска компонента. и управляется массивом зависимостиб например пустой массив значит что он сработает один раз
  React.useEffect(() => {
    getAssets()
      .then((json) => setCoinList(json.data))
      .catch((error) => setErrorMessage(error.message));
  }, []);

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>VWAP(24H)</th>
            <th>Supply</th>
            <th>Volume(24H)</th>
            <th>Change(24H)</th>
          </tr>
        </thead>
        <tbody>
          {coinList.map((coin) => {
            const formatedCoin = coinDataFormat(coin);
            return (
              <tr
                key={formatedCoin.id}
                onClick={() => handleOnClick(formatedCoin)}
              >
                <td>{formatedCoin.rank}</td>
                <td>{formatedCoin.name}</td>
                <td>
                  <Number value={formatedCoin.priceUsd} />
                </td>
                <td>
                  <Number value={formatedCoin.marketCapUsd} />
                </td>
                <td>
                  <Number value={formatedCoin.vwap24Hr} />
                </td>
                <td>
                  <Number value={formatedCoin.supply} />
                </td>
                <td>
                  <Number value={formatedCoin.volumeUsd24Hr} />
                </td>
                <td>{formatedCoin.changePercent24Hr}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* передаём состояние из коинлиста */}
      <CoinInfoModal
        setPage={setPage}
        show={showInfoModal}
        setShow={setShowInfoModal}
        coinData={coinData}
      />
      <ErrorModal
        show={!!errorMessage}
        handleClose={() => setErrorMessage(null)}
        errorMessage={errorMessage}
      />
    </>
  );
}

export default CoinsList;
