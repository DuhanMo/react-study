import React from 'react';
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
      <HeaderList>
        <ul>
          <li>
            <StyledHeadLink to="/">홈</StyledHeadLink>
          </li>
          <li>
            <StyledHeadLink to="/login/10">로그인</StyledHeadLink>
          </li>
        </ul>
      </HeaderList>
    </div>
  );
}

export default Header;
