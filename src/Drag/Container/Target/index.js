import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Type from '../../Type'

const targetSpec = {
  drop(props, monitor, component) {
    // ..
  },
  hover(props, monitor, component) {
    // ..
  },
  canDrop(props, monitor) {
    // ..
  }
}
const collect = (connect) => ({
  connectDropTarget: connect.dropTarget(),
})



class Target extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { connectDropTarget } = this.props
    return connectDropTarget(  
      <div className='target' style={{background: "yellow", width: "100%",height: '100%'}}>

      </div>
    );
  }
}
 
export default DropTarget(Type.BOX, targetSpec, (connect) => ({
  connectDropTarget: connect.dropTarget(),
}))(Target);