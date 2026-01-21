import { useState } from 'react';
import './App.css';
import UseState from './components/UseState';
import UseStateName from './components/UseStateName';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import UseEffect from './components/UseEffect';
import Timer from './components/Timer';
import UseRef from './components/UseRef';

const App = () => {
  // const [count, setCount] = useState(0);
  // const handleSetCount = (value) => {
  //   setCount(count + value);
  // };
  return (
    <div>
      {/* <h1>Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section> */}
      {/* <UseEffect /> */}
      <UseRef />
    </div>
  );
};

export default App;
