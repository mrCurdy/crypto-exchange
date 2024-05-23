import Modal from "react-bootstrap/Modal";
import CoinInfo from "./CoinInfo";

function CoinInfoModal({ show, setShow, name }) {
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="coin-info-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="coin-info-modal">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CoinInfo />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CoinInfoModal;
