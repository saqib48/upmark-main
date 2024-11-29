"use client";
import React, { useEffect } from 'react';
import Home from './home';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "../app/globals.css"

function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className='overflow-hidden'>
      <Home />
    </div>
  );
}

export default Index;
