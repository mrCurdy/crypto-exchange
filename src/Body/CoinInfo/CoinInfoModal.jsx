import Modal from "react-bootstrap/Modal";
import CoinInfo from "./CoinInfo";
import Button from "react-bootstrap/Button";

function CoinInfoModal({ show, setShow, coinData, setPage }) {
  const handleOnclick = () => {
    setPage("page");
    setShow(false);
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
