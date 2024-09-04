import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="flex container mx-auto">
      <div className="">
        <Nav></Nav>
      </div>
      <div className="h-[100vh]">
        <Header />
        <div className="overflow-auto h-[90vh]">
          <Hero />
          <Features />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
