// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { Nav } from './components/sections/nav'
import { Hero } from './components/sections/hero'
import { Stats } from './components/sections/stats'
import { Doctors } from './components/sections/doctors'
import { Platforms } from './components/sections/platforms'
import { Process } from './components/sections/process'
import { Philosophy } from './components/sections/philosophy'
import { Framework } from './components/sections/framework'
import { Quiz } from './components/sections/quiz'
import { Cta } from './components/sections/cta'

function App() {

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Status bar */}
      {/* <StatusBar /> */}

      {/* Nav */}
      <Nav />

      {/* HERO */}
      <Hero />

      {/* TICKER */}
      {/* <Ticker /> */}

      {/* STATS */}
      <Stats />

      {/* DOCTORS / CASE STUDIES */}
      <Doctors />

      {/* PLATFORMS */}
      <Platforms />

      {/* PROCESS */}
      <Process />

      {/* PHILOSOPHY */}
      <Philosophy />

      {/* CCN FRAMEWORK + TIPS */}
      <Framework />

      {/* MYTH OR FACT */}
      <Quiz />

      {/* CTA */}
      <Cta />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
