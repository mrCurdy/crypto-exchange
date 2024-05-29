import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Body from "./Body";
import React from "react";

function App() {
  const [showSideBar, setShowSideBar] = React.useState(false);
  const [page, setPage] = React.useState("main");

  return (
    <Container>
      <Header setShowSideBar={setShowSideBar} page={page} setPage={setPage} />
      <Body
        setPage={setPage}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        page={page}
      />
    </Container>
  );
}

export default App;
