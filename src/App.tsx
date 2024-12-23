import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 페이지 컴포넌트 import
import MainPage from '@pages/index/index.tsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App