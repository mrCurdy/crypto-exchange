import Table from "react-bootstrap/Table";
import React from "react";
import CoinInfoModal from "./CoinInfoModal";

function CoinsList() {
  const [showInfoModal, setShowInfoModal] = React.useState(false);
  const [coinData, setCoinData] = React.useState({});

  const handleOnClick = (name) => {
    setShowInfoModal(true);
    setCoinData({ name });
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>VWAP(24Hr)</th>
            <th>Supply</th>
            <th>Volume(24Hr)</th>
            <th>Change(24Hr)</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => handleOnClick("Bitcoin")}>
            <td>1</td>
            <td>Bitcoin</td>
            <td>15151</td>
            <td>48484</td>
            <td>XXXX</td>
            <td>XXXX</td>
            <td>XXXX</td>
            <td>XXXX</td>
          </tr>
        </tbody>
      </Table>
      {/* передаём состояние из коинлиста */}
      <CoinInfoModal
        show={showInfoModal}
        setShow={setShowInfoModal}
        coinData={coinData}
      />
    </>
  );
}

export default CoinsList;
