import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import SmartInvestmentsPage from './components/SmartInvestmentsPage'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    // <>path kora
    <>
      <div>
      <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/smartinvestment" element={<SmartInvestmentsPage/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </Router>
        </div>
    </>
  )
}

export default App
