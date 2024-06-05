import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import { periods } from "./CoinInfo/constants";
import { useNavigate } from "react-router-dom";

function SearchForm({ closeSideBar }) {
  const navigate = useNavigate();
  const [searchData, setSearchData] = React.useState({});

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // тут console.log event можно поставить и посмотреть путь к значениям
    const coin = event.target.coin.value;
    // target это то с чем случился event тут это form
    const period = event.target.period.value;

    navigate(`/coin/${coin}/${period}`);

    closeSideBar();
  };

  console.log(searchData);

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
    </Form>
  );
}

export default SearchForm;
