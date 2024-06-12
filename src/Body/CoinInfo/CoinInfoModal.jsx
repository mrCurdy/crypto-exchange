import Modal from "react-bootstrap/Modal";
import CoinInfo from "./CoinInfo";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCoinData } from "../../service/state";

function CoinInfoModal() {
  const navigate = useNavigate();

  const coinData = useSelector((state) => state.coinData);
  const dispatch = useDispatch();

  const handleOnclick = () => {
    dispatch(setCoinData(null));
    navigate("/coin/" + coinData.id);
  };
  return (
    <>
      <Modal
        size="lg"
        show={!!coinData}
        onHide={() => dispatch(setCoinData(null))}
        aria-labelledby="coin-info-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="coin-info-modal">{coinData?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!!coinData && <CoinInfo coinData={coinData} />}
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
