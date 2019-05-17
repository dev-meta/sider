import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Source from './Source/index'
import Target from './Target/index'

// DragDropContext(HTML5Backend)
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <DragDropContextProvider backend={HTML5Backend}>

        <div className="container" style={{width: "100%",height: '100%'}}>
          <Target />
          <Source />
        </div>
      </DragDropContextProvider>
    );
  }
}
 
export default Container;