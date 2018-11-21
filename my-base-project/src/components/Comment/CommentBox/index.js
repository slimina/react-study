import React,{Component} from 'react'

class CommentBox extends Component{

    constructor(props){
        super(props)
        this.state={
            comment:""
        }
    }

    handleSubmit=(e)=>{
        this.props.onAddComment(this.state.comment)
        this.setState({
            comment:""
        })
        e.preventDefault()
    }

    handleChange=(e)=>{
        this.setState({
            comment:e.target.value
        })
    }
    //受控组件
    render(){
        return (
            <form className="p-5" style={{textAlign:"left"}} onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>留言内容</label>
                    <input type="text" placeholder="请输入内容" className="form-control" value={this.state.comment}
                           onChange={this.handleChange}/>
                </div>
                <button type="submit" className=" btn btn-primary">留言</button>
                <p>总共{this.props.commentLenth}条评论</p>
            </form>
        )
    }
}

export default CommentBox;