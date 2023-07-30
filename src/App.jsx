import React, { useState } from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Hero,
  Features
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./components/Service/Service";
import Program from "./components/Programs/Program";
import Portfolio from "./components/Portfolio/Portfolio";
import Career from "./components/Careers/Career";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact"

// to compoent wrapping
const ComponentWrapper = ({Component}) => (
  <div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {Component}
      </div>
    </div>
  </div>
)



const App = () => {
  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<ComponentWrapper Component={<Service/>}/>} />
          <Route path="/programs" element={<ComponentWrapper Component={<Program/>}/>}/>
          <Route path="/portfolio" element={<ComponentWrapper Component={<Portfolio/>}/>}/>
          <Route path="/careers" element={<ComponentWrapper Component={<Career/>}/>}/>
          <Route path="/blogs" element={<ComponentWrapper Component={<Blog/>}/>}/>
          <Route path="/contact" element={<ComponentWrapper Component={<Contact/>}/>}/>



        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

// Home Component: Contains the main content
const Home = () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      {/* <Testimonials /> */}
      <CTA />
    </div>
  </div>
);


export default App;
