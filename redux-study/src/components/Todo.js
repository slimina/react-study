import React from "react"
import PropTypes from "prop-types"

class Todo extends React.Component{

    render(){
        return (
            <li onClick={this.props.todoClick} style={{
                textDecoration : this.props.completed? "line-through" : "none",
                cursor:this.props.completed? "default" : "pointer"
            }}>
                {this.props.text}
            </li>
        )
    }
}

//prop校验
Todo.propTypes = {
    todoClick : PropTypes.func.isRequired,
    text:PropTypes.string.isRequired,
    completed :PropTypes.bool.isRequired
}

export default Todo