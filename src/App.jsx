import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import List from './pages/List/List'
import './App.css'

function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/list" element={<List/>} />
    </Routes>
  </Router>
  )
}

export default App
