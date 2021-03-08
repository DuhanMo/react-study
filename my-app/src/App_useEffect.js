import { useEffect, useState } from 'react';
import './App.css';

function App() {
  console.log('App() 실행됨');
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    // 다운로드를 받고(통신)
    let downloadData = 5; // 가정
    setData(downloadData);
  };

  // (1) App() 함수가 최초 실행될 때 (마운트될 때)
  // (2) 상태변수가 변경될 때
  // (3) 의존리스트 관리를 할 수 있다.
  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]);

  return (
    <div>
      <h1>useEffect</h1>
      <button
        onClick={() => {
          setSearch(search + 1);
        }}
      >
        검색하기
      </button>
      <h2>data: {data}</h2>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
