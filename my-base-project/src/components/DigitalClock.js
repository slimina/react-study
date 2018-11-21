import React from 'react'

class DigitalClock extends React.Component{

    constructor(props){
        super(props)
        this.state={
            date : new Date()
        }
    }

    // 生命周期 https://www.jianshu.com/p/c9bc994933d5
    componentDidMount(){ //组件加载完成
        this.timer=setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }

    componentDidUpdate(currentProps,currentState){ //变量更新render后
        //console.log(currentState)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("unmount")
    }
    render(){
        return (
            <div className="digital-clock-component jumbotron">
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }

}

export default DigitalClock;