import { useState } from 'react'
import Login from './pages/Login.jsx'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='app'>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
    </div>
  )
}

export default App
