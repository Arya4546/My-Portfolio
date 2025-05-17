// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorEffect from "./components/CursorEffect";
import Home from "./pages/Home"

const App = () => {
  return (
    <div className="text-white bg-regal-900 min-h-screen scroll-smooth" style={{ scrollPaddingTop: "80px" }}>
      <CursorEffect />
      <Header />
      <main>
        <Hero />
        <Home/>
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
