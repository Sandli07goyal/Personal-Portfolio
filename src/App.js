import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import AOS from "aos"

import "bootstrap/dist/css/bootstrap.min.css"
import "aos/dist/aos.css"
import "./css/App.css"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Achievements from "./pages/Achievements"

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="description" content="Dhruv Sethi - Fullstack Developer." />
              <meta name="author" content="Sandli Goel" />
              <title>Sandli Goel - Portfolio</title>
            </Helmet>
            <div id="wrapper">
              <Navbar />
              <Home />
              <Education />
              <Experience />
              <Skills />
              <Projects />
              <Achievements />
              <Contact />
            </div>
          </>
        }
      />
    </Routes>
  )
}

export default App
