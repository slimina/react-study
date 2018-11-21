import React from "react"

import TodoItem from "./TodoItem"

class TodoList extends React.Component{

    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    }
    handleSubmit=(e)=>{
        this.setState({
            items :[...this.state.items,this._inputItem.value]
        })
        this._inputItem.value = "";
        this._inputItem.focus();
        e.preventDefault();
    }
    render(){
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.handleSubmit} >
                        <input placeholder="请输入一个任务"
                        ref={e=>this._inputItem = e}/>
                        <button type="submit">添加</button>
                    </form>
                </div>
                <TodoItem items={this.state.items}/>
            </div>
        )
    }
}

export default TodoList;