import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Body from "./Body";
import React from "react";

function App() {
  const [showSideBar, setShowSideBar] = React.useState(false);
  return (
    <Container>
      <Header setShowSideBar={setShowSideBar} />
      <Body showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </Container>
  );
}

export default App;
