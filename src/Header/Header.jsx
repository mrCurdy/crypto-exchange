import Navigation from "./Navigation";
import SubHeader from "./SubHeader";

function Header(props) {
  return (
    <>
      <Navigation {...props} />
      <SubHeader />
    </>
  );
}

export default Header;
