import React , { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import FourSection from './components/FourSection';
import ThreeSection from './components/threeSection';

class App extends Component {
  render () {
    return(
      <div className="container-fluid">
      < Header />
      < ThreeSection />
      < FourSection />
      < Footer />
      </div>
    )
  } 
}


export default App;
