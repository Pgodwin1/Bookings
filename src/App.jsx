import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import List from './pages/List/List'
import './App.css'
import Hotel from './pages/Hotels/Hotel'

function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/list" element={<List/>} />
      <Route path="/hotel" element={<Hotel/>} />
    </Routes>
  </Router>
  )
}

export default App
