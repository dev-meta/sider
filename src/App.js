import React, { Component } from 'react';
import logo from './logo.svg';
import Select ,{ Option } from 'rc-select'
import {Button } from 'antd'
import 'antd/dist/antd.css'
import 'rc-select/assets/index.css'
import Sider from './Sider/Sider'
import Container from './Drag/Container/index'
import './App.scss';

class App extends Component {
  constructor(){
    super()
    this.state = {
      destroy: false,
      value: undefined,
      age: 1
    };

  }
  set=()=>{
    this.setState(state=>({
      age: state.age+1
    }))
  }
  onChange = e => {
    
    console.log('onChange', e)
    this.setState({
      value: e
    })
  }
  click = ()=>{
    // console.log("click")
    alert("haha")
  }
  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <div className="content">
          <img onClick={this.set} src={logo} width="220px" alt=""/>
          <div>

            <Button onClick={this.click} >ahah</Button>
          </div>
          <Container />
        </div>
        <div style={{ margin: 20 }}>
          <h2>controlled Select</h2>
          <div style={{ width: 300 }}>
            <Select
              value={value}
              placeholder="placeholder"
              style={{ width: 500 }}
              onChange={this.onChange}
              optionLabelProp="children"
            >
              <Option value="assignation" >指定连麦11</Option>
              <Option value="random" >随机连麦</Option>
              <Option value="11" >lucy</Option>
            </Select>
          </div>
        </div>
        <Sider age={this.state.age} />
      </div>
    );
  }
}

export default App;
