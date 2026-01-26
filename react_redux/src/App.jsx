import './App.css'
import Left1 from './components/Left1'
import Right1 from './components/Right1'

// 1. redux 폴더 생성 후 store.js 생성

function App() {

  return (
    <div className='App'>
     <h1>Root App:  </h1>
     <div className='wrapper'>
      <Left1 />
      <Right1 />
     </div>
    </div>
  )
}

export default App
