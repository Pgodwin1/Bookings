import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Hotels from "./pages/Hotels/Hotel"
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<Hotels/>} />
    </Routes>
  </Router>
  )
}

export default App
