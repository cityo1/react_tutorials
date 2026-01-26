import React from 'react'
import { useDispatch } from 'react-redux'

const Right3 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3: </h1>
      <button onClick={() => dispatch({type: 'PLUS'})}>+</button>
    </div>
  )
}

export default Right3