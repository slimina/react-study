import React from "react"
import PropTypes from "prop-types"

class AddTodo extends  React.Component{

    handleClick=(e)=>{
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = "";
    }

    render(){
        return (
            <div className="todo-add">
                <input type="text" ref="input" placeholder="请输入内容" />
                <button onClick={(e)=>{
                    this.handleClick(e);
                    e.preventDefault();
                }}>
                    添加待办项
                </button>
            </div>
        )
    }
}

//props验证

AddTodo.propTypes = {
    onAddClick:PropTypes.func.isRequired
}

export default AddTodo;