import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let posts = '강남 우동 맛집'
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>7월 24일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>7월 24일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>7월 24일 발행</p>
      </div>
    </div>
  );
}

export default App;
