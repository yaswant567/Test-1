import React from 'react';
// import './App.css';
import img from "./image/1.jpg";
import img1 from "./image/2.jpg";
import img2 from "./image/3.jpg";
import img3 from "./image/4.jpg";


import Cards from '../src/cards';

function App() {
  return (
    
    <>
    <Cards name="card1" img={img}/>
    <Cards name="card2"  img={img1}/>
    <Cards name="card3" img={img2}/>
    <Cards name="card4" img={img3}/>
    </>
  );
}

export default App;
