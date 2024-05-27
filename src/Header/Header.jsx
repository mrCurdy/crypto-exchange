import Navigation from "./Navigation";
import MainSubHeader from "./SubHeader/Main";
import { mainSubheader, pageSubHeader } from "./SubHeader/constants";

function Header(props) {
  return (
    <>
      <Navigation {...props} />
      <MainSubHeader
        data={props.page === "main" ? mainSubheader : pageSubHeader}
      />
    </>
  );
}

export default Header;
