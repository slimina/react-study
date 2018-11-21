import React from "react"
import PropTypes from "prop-types"

import Todo from "./Todo"

class TodoList extends React.Component{
    render(){
        return (
            <div className="todo-list">
                <ul>
                    {
                        this.props.todos.map((todo,idx)=>
                            <Todo
                                key={idx}
                                {...todo}
                                todoClick={()=>this.props.onTodoClick(idx)}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}

TodoList.propTypes = {
    onTodoClick:PropTypes.func.isRequired,
    todos : PropTypes.arrayOf(PropTypes.shape({
        text:PropTypes.string.isRequired,
        completed :PropTypes.bool.isRequired
    }).isRequired).isRequired
}

export default TodoList;