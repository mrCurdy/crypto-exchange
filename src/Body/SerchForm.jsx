import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchForm({ closeSideBar }) {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    closeSideBar();
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="coin">
        <Form.Label>Coin</Form.Label>
        <Form.Control type="text" placeholder="Enter coin" />
        <Form.Text className="text-muted">Example: "BTC"</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="from">
        <Form.Label>Date from</Form.Label>
        <Form.Control type="date" placeholder="Date from" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dateTo">
        <Form.Label>Date to</Form.Label>
        <Form.Control type="date" placeholder="Date to" />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
