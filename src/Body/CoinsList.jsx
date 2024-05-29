import Table from "react-bootstrap/Table";
import React from "react";
import CoinInfoModal from "./CoinInfo/CoinInfoModal";
import { getAssets } from "../api/assets";
import { coinDataFormat } from "./utils";

function CoinsList({ setPage }) {
  const [showInfoModal, setShowInfoModal] = React.useState(false);
  const [coinData, setCoinData] = React.useState({});
  const [coinList, setCoinList] = React.useState([]);
  // после изменения состояния функции перезапускаются, поэтому для хапросов своя фича useEffect
  const handleOnClick = (coin) => {
    setShowInfoModal(true);
    setCoinData(coin);
  };
  // срабатывает после запуска компонента. и управляется массивом зависимостиб например пустой массив значит что он сработает один раз
  React.useEffect(() => {
    getAssets().then((json) => setCoinList(json.data));
  }, []);

  return (
    <>
      <Table striped bordered hover>
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
                <td>{formatedCoin.priceUsd}</td>
                <td>{formatedCoin.marketCapUsd}</td>
                <td>{formatedCoin.vwap24Hr}</td>
                <td>{formatedCoin.supply}</td>
                <td>{formatedCoin.volumeUsd24Hr}</td>
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
    </>
  );
}

export default CoinsList;
