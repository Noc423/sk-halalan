import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Candidates from './pages/Candidates'
import About from './pages/About'
import Profile from './pages/Profile'
import Leadership from './pages/Leadership'
import Developer from './pages/Developer'
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
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App