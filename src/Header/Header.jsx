import Navigation from "./Navigation";
import Main from "./SubHeader/Main";
import { mainSubheader } from "./SubHeader/constants";

function Header(props) {
  return (
    <>
      <Navigation {...props} />
      <Main data={mainSubheader} />
    </>
  );
}

export default Header;
