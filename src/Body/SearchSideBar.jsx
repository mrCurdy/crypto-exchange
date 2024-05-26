import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";

function SearchSideBar({ showSideBar, setShowSideBar }) {
  const handleClose = () => setShowSideBar(false);
  return (
    <Offcanvas show={showSideBar} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>What are you looking for?</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm setShowSideBar={setShowSideBar} />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SearchSideBar;
