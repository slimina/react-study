import React,{Component} from 'react'

import  CommentBox from './CommentBox'
import  CommentList from './CommentList'

class Comment extends Component{

    constructor(props){
        super(props)
        this.state ={
            comments : ["this is very good!"]
        }
    }

    onAddComment=(comment)=>{
        this.setState({
            comments:[...this.state.comments,comment]
        })
    }
    render(){
        return (
            <div>
                <CommentList  comments={this.state.comments}/>
                <CommentBox
                    commentLenth={this.state.comments.length}
                    onAddComment={this.onAddComment}
                />
            </div>
        )
    }
}

export default Comment;