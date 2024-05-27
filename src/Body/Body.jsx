import CoinsList from "./CoinsList";
import SearchSideBar from "./SearchSideBar";
import CoinInfo from "./CoinInfo/CoinInfo";

function Body(props) {
  return (
    <>
      {props.page === "main" ? (
        <CoinsList {...props} />
      ) : (
        <CoinInfo coinData={{ name: "TestCoin" }} />
      )}
      <SearchSideBar {...props} />
    </>
  );
}

export default Body;
