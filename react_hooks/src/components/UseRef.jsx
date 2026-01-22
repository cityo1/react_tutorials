import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

// const ref = useRef(value) -> {current: value}
// state와 마찬가지로 특정 값을 저장하고 유지할 때 사용 : hook은 함수이고, 이는 매번 렌더링 될 때마다 재호출하게 된다. 이때 상태 변화 없이 값만 유지하고 싶을 때 사용한다.

// 변수와 ref의 차이
// 아래 코드에서 Var Up, Ref Up을 클릭하면 화면에는 렌더링 되지 않는 다는 점은 같다.
// 하지만 특정 함수(doRendering)를 호출하면 화면이 렌더링 되는데, 이때 Ref 값은 유지되지만 변수 값은 초기화된다.

const UseRef = () => {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const increaseState = () => {
    setCount(count + 1);
    console.log('State: ', count);
  };

  const increaseRef = () => {
    countRef.current += 1;
    console.log('Ref: ', countRef.current);
  };

  const increaseVar = () => {
    countVar += 1;
    console.log('Var: ', countVar);
  };

  const doRendering = () => {
    setRender(render + 1);
    console.log('Rendering: ', render);
  };
  return (
    <div>
      <p>State: {count}</p>    
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <br />
      <button onClick={increaseState}>State Up</button>
      <button onClick={increaseRef}>Ref Up</button>
      <button onClick={increaseVar}>Var Up</button>
      <button onClick={doRendering}>Rendering</button>
    </div>
  );
};

export default UseRef;
