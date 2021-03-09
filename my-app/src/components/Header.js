import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성 (재사용)

// styled-components => js파일과 css파일 관리의 용이성

const HeaderList = styled.div`
  border: 1px solid black;
  height: 300px;
`;
// styled component 상속
const StyledHeadLink = styled(Link)`
  color: red;
`;
function Header(props) {
  return (
    <div>
      <div>
        <HeaderList>
          <ul>
            <li>
              <StyledHeadLink to="/">홈</StyledHeadLink>
            </li>
            <li>
              <StyledHeadLink to="/login">로그인</StyledHeadLink>
            </li>
          </ul>
        </HeaderList>
      </div>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            {/* Nav.Link a 가 안먹음 그래서 클래스네임만 nav-link로 바꾸면 잘먹음 */}
            <Link to="/" className="nav-link">
              홈
            </Link>
            <Link to="/login" className="nav-link">
              로그인
            </Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <br />
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>

        <br />
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
      </>
    </div>
  );
}

export default Header;
