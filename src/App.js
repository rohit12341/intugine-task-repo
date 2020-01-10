import React from 'react';
import Dashboard from './home';
import Header from './header';
import {BrowserRouter as Router} from 'react-router-dom';
// import './App.css';
// import Footer from './footer';


class  App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    
    }
  }

  render(){
  return (
    <div className="">
      <Router>
    <Header/>
    <Dashboard/>
    </Router>
    </div>
  );
  }
}

export default App;
