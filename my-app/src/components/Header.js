import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성 (재사용)

// styled-components => js파일과 css파일 관리의 용이성

const HeaderList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

function Header(props) {
  return (
    <div>
      <HeaderList>
        <ul>
          <li>메뉴1</li>
          <li>메뉴2</li>
        </ul>
      </HeaderList>
    </div>
  );
}

export default Header;
