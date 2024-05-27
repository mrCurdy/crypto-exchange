import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SerchForm";

function SearchSideBar({ showSideBar, setShowSideBar }) {
  const handleClose = () => setShowSideBar(false);
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
