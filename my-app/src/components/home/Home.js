import React from 'react';

// function 방식
const Home = (props) => {
  // 구조분할 할당
  // poprs 안에 있는 boards, id를 다시 저장해준다 (key값이 같아야함)
  const { boards, setBoards } = props;

  return (
    <div>
      <h1>홈페이지 입니다.</h1>
      <button onClick={() => setBoards([])}>전체 삭제</button>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};
export default Home;
