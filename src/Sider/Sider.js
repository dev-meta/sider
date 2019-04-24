import React, { Component } from 'react';
import './index.scss'

class Sider extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            addAnimation: false,
            barList: [
                {
                    role: 'material',
                    text: '教材',
                    desc: '这是教材'
                },
                {
                    role: 'microphone',
                    text: '连麦',
                    desc: '这是连麦'
                }
            ],
            content: ''

        }
    }

    handelClick = (desc)=>{
        // this.setState((state,props)=>({
        //     addAnimation: !state.addAnimation
        // }))
        // this.setState({
        //     addAnimation: !this.state.addAnimation
        // })
        this.setState({
            addAnimation: true,
            content: desc
        })
    }
    handleClose = ()=>{
        this.setState({
            addAnimation: false
        })
    }
    componentDidMount(){
        let temp = [
            {
                role: 'game',
                text: '游戏',
                desc: '这是游戏'
            }
        ]
        setTimeout(() => {
            this.setState((state)=>({
                barList: state.barList.concat(temp)
            }))
        }, 3000);
    }
    render() { 
        return (  
            <div className={this.state.addAnimation?'bar-content bar-content-open':'bar-content'}>
                <div className="bar-list">
                    {
                        this.state.barList.map((item)=>{
                            return (
                                <div onClick={()=>this.handelClick(item.desc)} key={item.role} className='bar-icon'>
                                    {item.text}
                                </div>
                            )
                        })
                    }
                </div>
                <div className={ this.state.addAnimation?'out-box animation': 'out-box'}>
                    <div onClick={this.handleClose} className="close">X</div>
                    {
                        this.state.content
                    }
                </div>
            </div>
        );
    }
}
 
export default Sider;