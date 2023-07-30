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
          <Route path="/service" element={<ServiceWrapper />} />
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

// ServiceWrapper Component: Contains the Service component and hides the main content
const ServiceWrapper = () => (
  <div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Service />
      </div>
    </div>
  </div>
);

export default App;
