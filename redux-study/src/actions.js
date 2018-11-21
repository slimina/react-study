/**
 * action 类型名称
 */
export const ADD_TODO="ADD_TODO";
export const COMPLETE_TODO="COMPLETE_TODO";
export const SET_VISIBILITY_FILTER="SET_VISIBILITY_FILTER";

//过滤常量类型
export const VisibilityFilters = {
    SHOW_ALL:"SHOW_ALL",
    SHOW_COMPLETED:"SHOW_COMPLETED",
    SHOW_ACTIVE:"SHOW_ACTIVE"
}

//用户添加待办项   action函数
export const addTodo = text=>{
    return {
        type:ADD_TODO,
        text
    }
}


//用户点击触发完成 action函数  index 具体待办项id

export const completeTodo = index=>{
    return {
        type:COMPLETE_TODO,
        index
    }
}

//用户进行过滤待办项  action函数
export const setVisibilityFilter=filter=>{
    return {
        type:SET_VISIBILITY_FILTER,
        filter
    }
}