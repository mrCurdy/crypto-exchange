import Modal from "react-bootstrap/Modal";
import CoinInfo from "./CoinInfo";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function CoinInfoModal({ show, setShow, coinData }) {
  const navigate = useNavigate();

  const handleOnclick = () => {
    setShow(false);
    navigate("/coin/" + coinData.id);
  };
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="coin-info-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="coin-info-modal">{coinData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CoinInfo coinData={coinData} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="mx-auto" onClick={handleOnclick}>
            More Information
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CoinInfoModal;
