import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import EngineeringThinking from './components/EngineeringThinking'
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
        <EngineeringThinking />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App
