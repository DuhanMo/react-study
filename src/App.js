import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [likeCount, setLikeCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleIndex, setTitleIndex] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      {
        title.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(!modal); setTitleIndex(i); }}>{a}
                <span onClick={() => {
                  let copy = [...likeCount];
                  copy[i]++;
                  setLikeCount(copy)
                }}>👍</span> {likeCount[i]} </h4>
              <p>7월 24일 발행</p>
            </div>)
        })
      }
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
      {
        modal ? <Modal title={title} titleIndex={titleIndex} onClick={() => { setModal(false) }}></Modal> : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.titleIndex]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}
export default App;
