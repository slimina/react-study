import React,{Component} from 'react'

class CommentBox extends Component{
    constructor(props){
        super(props)
    }

    handleSubmit=(e)=>{
        alert(this.textInput.value)
        e.preventDefault()
    }

    //非受控组件
    render(){
        return (
            <form className="p-5" style={{textAlign:"left"}} onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>留言内容</label>
                    <input type="text" placeholder="请输入内容" className="form-control"
                    ref={(textInput)=>{this.textInput=textInput}}/>
                </div>
                <button type="submit" className=" btn btn-primary">留言</button>
            </form>
        )
    }
}

export default CommentBox;