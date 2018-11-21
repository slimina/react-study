/**
 * reducer 是纯方法 传入旧的状态和action 返回新的状态
 */

import {combineReducers} from "redux"

import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER,VisibilityFilters} from "./actions"

const {SHOW_ALL} = VisibilityFilters;

//过滤器 响应
const visibilityFilter=(state=SHOW_ALL,action)=>{
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

//待办项  响应
const todos = (state=[],action)=>{
    switch (action.type){
        case ADD_TODO:
            //使用扩展运算符 ... [{text:"",completed:""}]
            return [...state,{
                text: action.text,
                completed:false
            }];
            //点击触发完成
        case COMPLETE_TODO :
            return [
                ...state.slice(0,action.index), //slice返回数组自定元素
                // assign 合并
                Object.assign({},state[action.index],{
                    completed : true
                }),
                ...state.slice(action.index+1)
            ];
        default:
            return state;
    }
};

//不同响应合并成一个reducer
const todoApp=combineReducers({
    visibilityFilter,
    todos
});

export default  todoApp

