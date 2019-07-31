import React , { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Jumbo from './components/jumbotron'
import FirstSection from './components/firstSection';
import SecondSection from './components/SecondSection';
import ThreeSection from './components/threeSection';
import FourSection from './components/FourSection';
import Footer from './components/footer';

class App extends Component {
  render () {
    return(
      <div className="container-fluid">
      < Header />
      < Jumbo />
      < FirstSection />
      < SecondSection />
      < ThreeSection />
      < FourSection />
      < Footer />
      </div>
    )
  } 
}


export default App;
