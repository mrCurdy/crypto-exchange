import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

function SearchForm({ closeSideBar }) {
  const [searchData, setSearchData] = React.useState({});
  const handleOnSubmit = (event) => {
    event.preventDefault();
    // тут console.log event можно поставить и посмотреть путь к значениям
    const coin = event.target.coin.value;
    const from = event.target.from.value;
    const dateTo = event.target.dateTo.value;
    setSearchData({ coin, from, dateTo });
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

      <Form.Group className="mb-3" controlId="from" name="from">
        <Form.Label>Date from</Form.Label>
        <Form.Control type="date" placeholder="Date from" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dateTo">
        <Form.Label>Date to</Form.Label>
        <Form.Control type="date" placeholder="Date to" name="dateTo" />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
