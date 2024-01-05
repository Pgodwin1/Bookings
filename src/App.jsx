import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Hotels from "./pages/Hotels/Hotel"
import './App.css'
import List from './pages/List'

function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hotel" element={<List/>} />
    </Routes>
  </Router>
  )
}

export default App
