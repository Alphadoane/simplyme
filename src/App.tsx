import React, { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

const Projects = lazy(() => import('./components/Projects'))
const EngineeringThinking = lazy(() => import('./components/EngineeringThinking'))
const TechnicalInsights = lazy(() => import('./components/TechnicalInsights'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<div className="container p-8 text-center">Loading Components...</div>}>
          <Projects />
          <EngineeringThinking />
          <TechnicalInsights />
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default App
