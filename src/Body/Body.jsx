import CoinsList from "./CoinsList";
import SearchSideBar from "./SearchSideBar";
import CoinInfo from "./CoinInfo/CoinInfo";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import ErrorModal from "../ErrorModal";
import CoinInfoModal from "./CoinInfo/CoinInfoModal";

function Body(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoinsList {...props} />} />
        {/* : значит как будет называться константа.. ссылки же пишуться через слэш */}
        <Route path="/coin/:id/:period" element={<CoinInfo />} />
        <Route path="/coin/:id/" element={<CoinInfo />} />
        <Route path="/contact/" element={<Contact />} />
      </Routes>
      <SearchSideBar {...props} />
      <ErrorModal />
      <CoinInfoModal />
    </>
  );
}

export default Body;
