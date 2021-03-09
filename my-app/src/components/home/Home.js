import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'duhan' ? 'blue' : 'red')};
`;
const StyledAddButton = styled(StyledDeleteButton)`
  /* color: ${(props) => (props.user.username === 'duhan' ? 'blue' : 'red')}; */
  background-color: orange;
`;

// function 방식
const Home = (props) => {
  // 구조분할 할당
  // poprs 안에 있는 boards, id를 다시 저장해준다 (key값이 같아야함)
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      <h1>홈:{number}</h1>
      <Button variant="primary">Primary</Button>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체 삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};
export default Home;
