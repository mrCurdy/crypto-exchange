import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import { periods } from "./CoinInfo/constants";
import { searchAssets } from "../api/assets";
import { Link } from "react-router-dom";
import { setFoundCoins } from "../service/state";
import { useSelector, useDispatch } from "react-redux";

function SearchForm({ closeSideBar }) {
  const [period, setPeriod] = React.useState(null);
  const foundCoins = useSelector((state) => state.foundCoins);
  const dispatch = useDispatch();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // тут console.log event можно поставить и посмотреть путь к значениям
    const coin = event.target.coin.value;
    // target это то с чем случился event тут это form
    const period = event.target.period.value;

    setPeriod(period);
    searchAssets(coin).then((json) => dispatch(setFoundCoins(json.data)));

    // closeSideBar();
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="coin">
        <Form.Label>Coin</Form.Label>
        <Form.Control type="text" placeholder="Enter coin" name="coin" />
        <Form.Text className="text-muted">Example: "BTC"</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="period">
        <Form.Label>Period</Form.Label>
        <Form.Select name="period">
          {periods.map((period, index) => (
            <option key={index} value={period.label}>
              {period.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Search
      </Button>
      {foundCoins?.length
        ? foundCoins
            .filter((coin) => !!coin.changePercent24Hr)
            .map((coin) => (
              <div key={coin.id}>
                <Link
                  to={`/coin/${coin.id}/${period}/`}
                  onClick={() => closeSideBar()}
                >
                  {coin.name}
                </Link>
              </div>
            ))
        : null}
    </Form>
  );
}

export default SearchForm;
