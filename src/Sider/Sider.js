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
                    desc: '这是教材',
                    content: [
                        {
                            type: "book",
                            title: '教材',
                            background: 'red',
                            list: [
                                {
                                    name: '听力',
                                    url: 'www.baidu.com'
                                },
                                {
                                    name: '口语',
                                    url: 'www.google.com'
                                }
                            ]
                        },
                        {
                            type: "video",
                            title: '视频',
                            background: 'skyblue',
                            list: [
                                {
                                    name: '听力第三课.mp4',
                                    url: 'three.mp4'
                                },
                                {
                                    name: '听力第四课.mp4',
                                    url: 'four.mp4'
                                }
                            ]
                        },
                        {
                            type: 'audio',
                            title: '音频',
                            background: 'green',
                            list: [
                                {
                                    name: '口语第一课.mp3',
                                    url: 'one.mp3'
                                },
                                {
                                    name: '口语第二课.pm3',
                                    url: 'two.mp3'
                                }
                            ]
                        }
                    ]
                },
                {
                    role: 'microphone',
                    text: '连麦',
                    desc: '这是连麦'
                }
            ],
            top: "0px",
            item: ''

        }
    }

    handelClick = (e, item) => {
        // e.persist()
        e.stopPropagation()
        const target = e.target;
        console.log(target.offsetTop)
        this.setState({
            addAnimation: true,
            item: item,
            top: target.offsetTop + 23 + 'px'
        })
    }
    handleClose = () => {
        this.setState({
            addAnimation: false
        })
    }
    componentDidMount() {
        let temp = [
            {
                role: 'game',
                text: '游戏',
                desc: '这是游戏'
            }
        ]
        setTimeout(() => {
            this.setState((state) => ({
                barList: state.barList.concat(temp)
            }))
        }, 3000);
    }
    father = ()=>{
        console.log("father")
    }
    render() {
        return (
            <div id='#box' className={this.state.addAnimation ? 'bar-content bar-content-open' : 'bar-content'}>
                <div>{this.props.age}</div>
                <div onClick={this.father} className="bar-list">
                    {
                        this.state.barList.map((item) => {
                            return (
                                <div onClick={(e) => this.handelClick(e, item)} key={item.role} className='bar-icon'>
                                    {item.text}
                                </div>
                            )
                        })
                    }
                </div>
                <div className={this.state.addAnimation ? 'out-box animation' : 'out-box'}>
                    <div onClick={this.handleClose} className="close">X</div>
                    <div style={{ top: this.state.top }} className='triangle'></div>
                    <div className="list-content">
                        {
                            this.state.item.role === 'material' ? (
                                this.state.item.content.map((element) => {
                                    return (
                                        // element.type === 'book' ? (
                                        <React.Fragment key={element.type}>
                                            <div className='item-title'>{element.title}</div>
                                            {

                                                element.list.map((ele) => {
                                                    return (
                                                        <div className='item' key={ele.url}>
                                                            <span onClick={()=>{console.log(ele.url)}} style={{ background: `${element.background}` }} className="pic"></span>
                                                            <span className="item-name">{ele.name}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </React.Fragment>
                                    )
                                })
                            ) : this.state.item.desc
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Sider;