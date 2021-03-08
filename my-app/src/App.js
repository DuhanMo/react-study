import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

// 0. React 엔진 - 데이터 변경감지해서 UI 그려주는 엔진
// 1. 실행과정 (index.html) -SPA
// 2. 문법

// (1) return 시에 하나의 Dom만 리턴할 수 있음
// (2) 변수선언은 let 혹은 const로만 해야함
// (3) if사용 불가능 -> 삼항연산자
// (4) 조건부 렌더링(조건 && 값(true))
// (5) css 디자인
// - 내부에 적는 방법
// - 외부 파일에 적는 방법
// - 라이브러리 사용 (부트스트랩, component-styled)
let a = 10;
const b = 20; // 상수
function App() {
  let c;

  const mystyle = {
    color: 'red',
  };
  return (
    <div>
      <div style={mystyle}>안녕! {a === 10 ? '10이맞음' : '10이 아님'}</div>
      <h1 className="box-style">해딩태그 {b === 20 && '20입니다.'}</h1>
      <hr />
    </div>
  );
}

export default App;
