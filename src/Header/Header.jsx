import Navigation from "./Navigation";
import Main from "./SubHeader/Main";
import { useMatch } from "react-router-dom";
import { mainSubheader } from "./SubHeader/constants";

function Header(props) {
  const match = useMatch("/");

  return (
    <>
      <Navigation {...props} />
      {match && <Main data={mainSubheader} />}
    </>
  );
}

export default Header;
