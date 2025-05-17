// src/components/MainLayout.jsx
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import CursorEffect from "./CursorEffect";

const MainLayout = () => {
  return (
    <>
      <CursorEffect />
      <Header />
      <main className="scroll-smooth" style={{ scrollPaddingTop: "80px" }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
