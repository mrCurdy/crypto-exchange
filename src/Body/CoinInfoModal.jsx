import Modal from "react-bootstrap/Modal";
import CoinInfo from "./CoinInfo";

function CoinInfoModal({ show, setShow, coinData }) {
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
      </Modal>
    </>
  );
}

export default CoinInfoModal;