import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import DesignThinking from './components/DesignThinking'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DesignThinking />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App
