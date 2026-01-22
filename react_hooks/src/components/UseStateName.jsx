import { useState } from 'react';

const UseStateName = () => {
  const [names, setNames] = useState(['가나다', '라마바']);
  const [input, setInput] = useState('');

  const handleUpload = () => {
    setNames((prev) => {
      return [input, ...prev];
    });
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <button
        className="border border-solid bg-gray-200"
        onClick={handleUpload}
      >
        update
      </button>
      <br />
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="border border-solid"
      />
      {names.map((name, index) => {
        return <p key={index}>{name}</p>
      })}
    </div>
  );
}

export default UseStateName;
