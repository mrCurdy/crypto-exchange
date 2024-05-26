import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function SearchForm({ setShowSideBar }) {
  return (
    <Form>
      <Form.Group md="3" controlId="currencyNameSearch">
        <Form.Label>Currency</Form.Label>
        <Form.Control type="text" placeholder="Currency" required />
        <Form.Control.Feedback type="invalid">
          Please enter the currency name.
        </Form.Control.Feedback>
      </Form.Group>
      <Row>
        <Form.Group
          as={Col}
          md="6"
          className="mt-2"
          controlId="startingDateSearch"
        >
          <Form.Label>Starting from</Form.Label>
          <Form.Control type="text" placeholder="starting date" required />
          <Form.Control.Feedback type="invalid">
            Please enter the starting date of a period.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="6"
          className="mt-2"
          controlId="EndingDateSearch"
        >
          <Form.Label>Ending at</Form.Label>
          <Form.Control type="text" placeholder="ending date" required />
          <Form.Control.Feedback type="invalid">
            Please enter the ending date of a period.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button
        type="button"
        onClick={() => setShowSideBar(false)}
        className="mt-3"
      >
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
