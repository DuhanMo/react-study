import { useMemo, useState } from 'react';

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');
  // 어떤 함수를 메모할지 적어야함
  //getAddResult 이 함수를 기억하고있겠다.

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('sum함수 실행됨:', sum);
    return sum;
  };
  const addResult = useMemo(() => getAddResult(), [list]);

  return (
    <div>
      <button
        onClick={() => {
          setStr('안녕');
        }}
      >
        문자변경
      </button>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트 값 추가
      </button>
      <h1>useMemo</h1>
      <div>
        {list.map((i) => (
          <li>{i}</li>
        ))}
      </div>
      <div>
        {str} : {addResult}
      </div>
    </div>
  );
}
export default App;
