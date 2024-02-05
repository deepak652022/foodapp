import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards';
import Carosel from '../components/Carosel';


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Carosel></Carosel>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}
