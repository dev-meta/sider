import React, { Component } from 'react';
import logo from './logo.svg';
import Sider from './Sider/Sider'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <img src={logo} width="220px" alt=""/>
        </div>
        <Sider />
      </div>
    );
  }
}

export default App;
