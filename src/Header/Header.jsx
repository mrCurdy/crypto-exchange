import Navigation from "./Navigation";
import Main from "./SubHeader/Main";
import { useMatch } from "react-router-dom";

function Header(props) {
  const match = useMatch("/");

  return (
    <>
      <Navigation {...props} />
      {match && <Main />}
    </>
  );
}

export default Header;
