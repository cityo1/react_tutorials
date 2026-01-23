import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Features from './components/Features'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

// BrowserRouter: 브라우저에 이동을 컨트롤 하는 전체 컴포넌트 -> 최상위 부모
// Routes: 페이지 이동을 위한 컴포넌트 -> 각각의 라우트를 감싸는 부모
// Route: 각 페이지 이동의 속성을 지정하는 컴포넌트
// Link: 페이지 이동을 위해 클릭되는 대상 요소에 지정한다.

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/features" element={<Features />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
