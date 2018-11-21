import React, { Component,Fragment } from 'react';
import './App.css';

import {HashRouter,BrowserRouter,Route,Link,NavLink} from "react-router-dom";

import HelloWorld from "./components/HelloWorld";
import RouterOne from "./components/RouterOne";

//match是在使用router之后被放入props中的一个属性，在class创建的组件中我们需要通过this.props.match来获取match之中的信息。
//Switch常常会用来包裹Route，它里面不能放其他元素，用来只显示一个路由。

function getLink() {

    //NavLink
    //exact用于严格匹配，匹配到/则不会继续向下匹配
    //to则是控制跳转的路径，activeClassName是选中状态的类名
    return (
        <div>
            <Link to="/one">link1</Link>
            <br/><br/>
            <Link to={{
                pathname:"/one",
                search:'?id=456',
                 // url:"/one",
                 //hash:"#hw",
                state:{fromDashboard:true}
            }}>link2</Link>
            <br/><br/>
            <NavLink exact activeClassName="selected" to="/hw">navLink</NavLink>
        </div>

    )
}


class App extends Component {

    constructor(props){
        super(props)
    }

  click=()=>{
      console.log(this)
  }
  render() {
    return (
           // http://localhost:3000/#/hw
           // <HashRouter>
           //     <Route path="/hw" component={HelloWorld}  />
           // </HashRouter>
        // http://localhost:3000/hw
         //<BrowserRouter>
         //   <Route path="/hw" component={HelloWorld}  />
         //</BrowserRouter>
        // http://localhost:3000/test/hw 或 http://localhost:3000/hw
        <BrowserRouter basename="/test">
            <div>
                /* 必须加上 exact，要不然 /hw 也会匹配到该路由 */
                <Route path="/" component={HelloWorld} exact  />
                <Route path="/hw" component={HelloWorld}  />
                <Route path="/one" component={RouterOne}  />
                {getLink()}
                <button onClick={this.click}>点击</button>
            </div>
        </BrowserRouter>
        // Route
        //exact控制匹配到/路径时不会再继续向下匹配，表示只对当前的路由进行匹配
        //path标识路由的路径
        //component表示路径对应显示的组件
    );
  }
}

export default App;
