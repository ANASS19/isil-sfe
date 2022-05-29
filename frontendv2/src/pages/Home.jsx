
import React from 'react';
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Chat from "../components/Chat";

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Chat />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home