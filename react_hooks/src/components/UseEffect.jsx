import { useState } from 'react';
import Timer from './Timer';

const UseEffect = () => {

  // useEffect(() => {
  //   console.log('초기 렌더링, 업데이트 시 렌더링');
  // });

  // useEffect(() => {
  //   console.log('초기 렌더링 될 때 한번만 실행');
  // }, []);

  // useEffect(() => {
  //   console.log('count가 업데이트 될 때 실행');
  // }, [count]);

  // useEffect(() => {
  //   console.log('text가 업데이트 될 때 실행');
  // }, [text]);

  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button
        onClick={() => {
          setShowTimer(!showTimer);
        }}
      >
        Toggle Timer
      </button>
    </div>
  );
};

export default UseEffect;
