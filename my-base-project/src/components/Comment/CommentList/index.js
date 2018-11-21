import React,{Component} from 'react'

//如果一个组件没有state变更，可以通过函数的方式定义
//const {comments} = this.props
const CommentList = ({comments}) =>{
    return (
        <div>
            <label>评论列表</label>
            <ul className="list-group mb-3">
                {
                    comments.map((comment,idx)=>
                        <li key={idx} className="list-group-item">{comment}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default CommentList