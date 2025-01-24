import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Body from "./Body";
import React from "react";

function App() {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}

export default App;
