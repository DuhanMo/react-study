import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/home/Home';

const HomePage = () => {
  // http 요청 ( fetch, axios (다운)) ajax 는 X
  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState('');

  useEffect(() => {
    // 다운을 했다고 가정 = fetch(), axios(), 비동기
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
      { id: 4, title: '제목4', content: '내용4' },
    ];
    console.log(data);
    // 빈데이터가 들어감
    setBoards([...data]);
    setUser({ id: 1, username: 'duhan' });
    // 빈 배열이면 무조건 딱 한번만 실행
  }, []);

  return (
    <div>
      <Header />
      {/* 넘어간 데이터를 (여기선 boards) props라고 한다 */}
      <Home
        boards={boards}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
        user={user}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
