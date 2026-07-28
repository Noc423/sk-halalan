import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Candidates from './pages/Candidates'
import About from './pages/About'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App