import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [likeCount, setLikeCount] = useState(0);
  let posts = '강남 우동 맛집'
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <div className="list">
        <h4>{title[0]} <span onClick={() => { setLikeCount(likeCount + 1) }}>👍</span> {likeCount} </h4>
        <p>7월 24일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]} <span>👍</span> {likeCount} </h4>
        <p>7월 24일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]} <span>👍</span> {likeCount} </h4>
        <p>7월 24일 발행</p>
      </div>
      <button onClick={() => {
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        setTitle(copy);
      }}>게시글 변경</button>
      <button onClick={() => {
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>가나다 정렬</button>
    </div>
  );
}

export default App;
