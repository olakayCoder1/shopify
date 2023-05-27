import {React , useState } from 'react'
import Dashboard from './pages/admin/Dashboard'
import AdminWrapper from './pages/admin/AdminWrapper'
import {Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  const onClick = () => {
    setShow(!show)
  }
  const onClose = () => {
    setShow(false)
  }

  return (
    <div className=' text-sm font-normal text-gray-700 bg-white'>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/admin/*" element={<AdminWrapper/>} />
    </Routes>
    </div>
  )
}

export default App
