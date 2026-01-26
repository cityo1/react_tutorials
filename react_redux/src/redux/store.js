// 2. redux react-redux 모듈 설치
// 3. createStore import

import { createStore } from 'redux';

// 4. reducer 함수 생성
function reducer(currentState, action) {
  // currentState: 현재(초기) 상태 값, action: 변경한 상태 내용 (액션 값)
  const newState = {...currentState}; // 새로운 상태를 생성할 때 기존 상태의 불변을 유지하기 위해 스프레드 연산자 사용

  if(currentState === undefined) { // 최초 초기 상태가 없다면
    return {number: 1} // number는 1 반환
  }


  if(action.type === 'PLUS') {
    newState.number++;
  }

  return newState

}

export const store = createStore(reducer); // 5. createStore에 reducer 함수를 등록 후 main.jsx에서 import