import Navigation from "./Navigation";
import MainSubHeader from "./SubHeader/Main";
import { mainSubheader } from "./SubHeader/constants";
import { useMatch } from "react-router-dom";

function Header(props) {
  const match = useMatch("/");

  return (
    <>
      <Navigation {...props} />
      {match && <MainSubHeader data={mainSubheader} />}
    </>
  );
}

export default Header;
