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
    <>
      <div>
      <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/smartinvestment" element={<SmartInvestmentsPage/>} />
            </Routes>
        </Router>
        </div>
    </>
  )
}

export default App
