import CoinsList from "./CoinsList";
import SearchSideBar from "./SearchSideBar";

function Body(props) {
  return (
    <>
      <CoinsList />
      <SearchSideBar {...props} />
    </>
  );
}

export default Body;
