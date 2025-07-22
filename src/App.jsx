import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Layout Components
import Navigation from './layout/Navigation'
import Footer from './layout/Footer'

// Page Components
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const handleSectionChange = (section) => {
    setActiveSection(section)
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#0f172a] text-[#f1f5f9]">
        <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
