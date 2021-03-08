import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성 (재사용)

// styled-components => js파일과 css파일 관리의 용이성

const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

function Footer(props) {
  return (
    <div>
      <FooterList>
        <ul>
          <li>오시는 길: 서울 강남구..</li>
          <li>전화번호: 02-023-1232</li>
        </ul>
      </FooterList>
    </div>
  );
}

export default Footer;
