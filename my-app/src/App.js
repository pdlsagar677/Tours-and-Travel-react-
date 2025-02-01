import React, { Component } from 'react';
import './App.css';
import Navbar from "./MYCOMPONENTS/Navbar"
import Travel from './MYCOMPONENTS/Travel';
import Destination from './MYCOMPONENTS/Destination';
import Featured from './MYCOMPONENTS/Featured';
import Feedback from './MYCOMPONENTS/Feedback';
import Article from './MYCOMPONENTS/Article';
import Footer from './MYCOMPONENTS/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar/>
       <Travel/>
       <Destination/>
       <Featured/>
       <Feedback/>
       <Article/>
       <Footer/>
      </div>
    );
  }
  
}

export default App;
