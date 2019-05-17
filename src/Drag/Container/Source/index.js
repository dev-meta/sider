import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import Type from '../../Type'
const sourceSpec = {
  beginDrag(props, monitor, component) {
    // 返回需要注入的属性
    return {
      id: props.id
    }
  },
  endDrag(props, monitor, component) {
    // ..
  },
  canDrag(props, monitor) {
    // ..
  },
  isDragging(props, monitor) {
    console.log(12)
    // ..
  }
}

class Source extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    // const { connectDragSource } = this.props
    const { connectDragSource, connectDragPreview } = this.props;
    return connectDragPreview(
      <div className="source">
        This div is draggable by a handle!
        {connectDragSource(
          <div>drag me</div>
        )}
      </div>
    );
  }
}
 
export default DragSource(Type.BOX, sourceSpec, (connect) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
}))(Source);