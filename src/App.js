import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Pizza from './components/Pizza/Pizza';
import SingleItem from './components/SingleItem/SingleItem';
import Cart from './Cart';

const App = () => {

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <>
                <Header />
                <Hero />
                <div id='pizza'>
                  <Pizza />
                </div>
                <Footer />
              </>
            } />

            <Route path='/product/:id' element={
              <>
                <SingleItem />
              </>
            } />

            <Route path='/cart' element={
              <>
                <Header />
                <Cart />
                <Footer />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
