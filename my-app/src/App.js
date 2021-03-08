import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useState } from 'react';
import Sub from './Sub';

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
// (6) 리액트를 최적화 해주려면 깊은복사를 해야함, (부모 자식 컴포넌트를 다시그리는지에대한 연산 ,..)

// function App() {

//   const mystyle = {
//     color: 'red',
//   };
//   return (
//     <div>
//       <div style={mystyle}>안녕! {a === 10 ? '10이맞음' : '10이 아님'}</div>
//       <h1 className="box-style">해딩태그 {b === 20 && '20입니다.'}</h1>
//       <hr />
//     </div>
//   );
// }

// function App() {
//   let list = [1, 2, 3];

//   // let number = 1; // 상태변수 , 상태값은 아님
//   // 상태값으로 만든 후 리액트엔진이 관리하게 하려면
//   const [number, setNumber] = useState(1); // React안에 hooks 라이브러리를 쓴 것. 상태값이 됨. UI와 동기화가 되어있음
//   const add = () => {
//     // number++ 사용불가 , setNumber로만 number변수 제어 가능
//     setNumber(number + 1); // React한테 'number값 변경할게' 라고 요청하는 것.
//     console.log('add', number);
//   };
//   const init = () => {
//     setNumber(0);
//     console.log('init', number);
//   };
//   // 랜더링 시점 = 상태값 변경될 때
//   return (
//     <div>
//       <h1>숫자: {number}</h1>
//       {/* 함수를 넣을때는 바인딩만 한다 ( ()를 넣으면 안됨 ) */}
//       <button onClick={add}>더하기</button>
//       <Sub />
//       <br></br>
//       <button onClick={init}>초기화</button>
//     </div>
//   );
// }

// 문제
function App() {
  console.log('App 실행됨');
  // 다운로드 받음
  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '장보고' },
    { id: 3, name: '궁예' },
    { id: 4, name: '견원' },
  ];
  const [users, setUsers] = useState(sample); // 레퍼런스 변경되야 동작!
  const download = () => {
    sample.push({ id: 5, name: '조자룡' });
    console.log(sample);
    setUsers([...sample]);
  };
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <l1>
          {u.id} : {u.name},
        </l1>
      ))}
    </div>
  );
}

export default App;
