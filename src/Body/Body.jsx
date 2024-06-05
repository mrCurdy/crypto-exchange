import CoinsList from "./CoinsList";
import SearchSideBar from "./SearchSideBar";
import CoinInfo from "./CoinInfo/CoinInfo";
import { Routes, Route } from "react-router-dom";

function Body(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoinsList {...props} />} />
        {/* : значит как будет называться константа.. ссылки же пишуться через слэш */}
        <Route path="/coin/:id/:period" element={<CoinInfo />} />
        <Route path="/coin/:id/" element={<CoinInfo />} />
        {/* сделать страницу контакты */}
      </Routes>
      <SearchSideBar {...props} />
    </>
  );
}

export default Body;
