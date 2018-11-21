import React from 'react'

class LikesButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            likes :0
        }
        console.log(this.props)
    }

    handleClick=()=>{
        console.log(this)
        this.setState({
            likes : ++ this.state.likes
        })
    }

    render(){
        return (
            <div>
                <button type="button" className="btn btn-outline-primary btn-lg"
                        onClick={this.handleClick}><span>👍 </span>{this.state.likes}</button>
            </div>
        )
    }

}

export default LikesButton;