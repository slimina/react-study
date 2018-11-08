// 按照这个定义 默认会加载index.js

import React,{Component} from 'react';

import "./style.css"

class Header extends Component{

    render(){
        return (
            <header className="header">
                我的订单
            </header>
        )
    }
}

export  default Header;