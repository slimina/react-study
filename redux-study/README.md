# redux study

## 基础
redux 单向数据喽

Store(contains) -> State(defines) -> UI(triggers) -> Actions(send to) -> Reducer(updates) -> Store 

npm install  react-redux  redux  --save

http://cn.redux.js.org


## PropTypes属性类型检查

在React 16版本之后, PropTypes 从react包 换到了prop-types 包中,所以想要使用PropTypes 需要这样:

yarn add prop-types

在需要引入的地方使用:

import PropTypes from 'prop-types';