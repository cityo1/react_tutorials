import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 6. provider와 store 등록
// probider: 전체 프로젝트에서 사용 될 상태 데이터를 포괄하는 기능
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 7. provider의 속성으로 store를 지정한다. */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
