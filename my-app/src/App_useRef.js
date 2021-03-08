import { createRef, useMemo, useReducer, useRef, useState } from 'react';

function App() {
  const myRef = useRef(null);
  const [users, setUsers] = useState([
    { id: 1, name: '홍길동' },
    { id: 2, name: '장보고' },
    { id: 3, name: '이순신' },
    { id: 4, name: '유관순' },
  ]);
  const myRefs = Array.from({ length: users.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          console.log(myRef);
          myRefs[1].current.style.backgroundColor = 'red';
        }}
      >
        색 변경
      </button>
      <div ref={myRef}>박스</div>
      {users.map((user, index) => (
        <li ref={myRefs[index]}>{user.name}</li>
      ))}
    </div>
  );
}
export default App;
