import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SerchForm";
import { useSelector, useDispatch } from "react-redux";
import { setShowSideBar } from "../service/state";

function SearchSideBar() {
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setShowSideBar(false));
  const showSideBar = useSelector((state) => state.showSideBar);

  return (
    <Offcanvas show={showSideBar} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Serach</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm closeSideBar={handleClose} />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SearchSideBar;
