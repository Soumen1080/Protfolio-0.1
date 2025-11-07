import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Experiences from "./sections/experiences";
import Testimonial from "./sections/testimonial";
import Contact from "./sections/contact";
import Footer from './sections/footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
