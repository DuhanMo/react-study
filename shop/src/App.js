import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js"
import About from "./routes/About.js"


function App() {
  let [shoesList] = useState(data);
  let navigate = useNavigate();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                {
                  shoesList.map((shoes, i) => {
                    return (
                      <Card shoes={shoes} i={i} />
                    );
                  })
                }
              </div>
            </div>
          </>
        }></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버</div>}></Route>
          <Route path="location" element={<div>회사위치</div>}></Route>
        </Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Link to="/about">어바웃페이지</Link>
      <Button className="primary" onClick={() => navigate('detail')}>디테일 이동버튼</Button>
    </div>
  );
}
export default App;

function Card(props) {
  return <div className="col-md4" key={props.i}>
    <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" />
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content}</p>
  </div>;
}

