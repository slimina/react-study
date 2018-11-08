import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';

import CommentApp from './CommentApp';

import './style.css'

ReactDOM.render(
    <div>
        <TodoList />
        <CommentApp/>
    </div>, document.getElementById('root'));
