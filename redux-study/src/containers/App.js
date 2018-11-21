import React from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux";
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from "../actions";
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

import '../style/App.css';

class App extends React.Component {
  render() {
      //App接收State映射后的对象obj中的属性和dispatch传递给子组件
      const {dispatch,visibleTodos,visibilityFilter} = this.props;
    return (
      <div className="container">
         <AddTodo onAddClick={text=>{
             //分发到添加待办事项 action
             dispatch(addTodo(text))
         }}/>

          <TodoList onTodoClick={
              // 分发到点击触发完成 action
              idx=>dispatch(completeTodo(idx))
          } todos={visibleTodos}/>

          <Footer filter={visibilityFilter} onFilterChange={
              // 分发到过滤待办项 action
              nextFilter=>dispatch(setVisibilityFilter(nextFilter))
          }/>
      </div>
    );
  }
}

App.propTypes={
    visibleTodos:PropTypes.arrayOf(PropTypes.shape({
        text:PropTypes.string.isRequired,
        completed :PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter:PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

//过滤匹配显示待办项
const selectTodos = (todos, filter)=>{
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            // js filter方法匹配 completed = true的todo 返回一个新数组
            return todos.filter(todo=>todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo=>!todo.completed);
    }
}

/**
 * mapStateToProps 映射state
 *
 * @param  state  [store里的state]
 * @return object [返回一个对象，把对象里面的参数以属性传送给App，以及附带一个 dispatch]
 */
const select=(state)=>{
    return {
        visibleTodos:selectTodos(state.todos,state.visibilityFilter),
        visibilityFilter:state.visibilityFilter
    }
}

// 通过 connect(select)(App) 连接 store 和 App 容器组件。
export default connect(select)(App);
