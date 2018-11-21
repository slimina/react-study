import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NameCard from './components/NameCard'
import LikesButton from './components/LikesButton'
import DigitalClock from "./components/DigitalClock";
import CommentBox from "./components/CommentBox"
import CommentBox2 from "./components/CommentBox2"

import Comment from "./components/Comment"

import vconsole from 'vconsole/dist/vconsole.min.js'

import ThemeContext from "./theme-context"
import ThemedBar from "./components/ThemedBar"

import TodoList from "./components/TodoList"

const tags = ['恐龙','小红人']

new vconsole();


const themes = {
    light:{
        classnames:"btn btn-primary",
        bgColor:"#eee",
        color:"#000"
    },
    dark:{
        classnames:"btn btn-btn-light",
        bgColor:"#222",
        color:"#fff"
    },
}



class App extends Component {

    constructor(props){
        super(props)
        this.state={
            theme:"dark"
        }
    }

    changeTheme=(theme)=>{
        this.setState({
            theme:theme
        })
    }

  render() {
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
              </header>
              <a href="#theme-switcher" className="btn btn-light" onClick={()=> this.changeTheme("light")}>
                  浅色主题
              </a>
              <a href="#theme-switcher" className="btn btn-secondary" onClick={()=> this.changeTheme("dark")}>
                  深色主题
              </a>
              <ThemedBar/>

              <NameCard name = "TOM" isHuman number={21333223232} tags={tags} />
              <LikesButton>www</LikesButton>
              <DigitalClock/>
              <CommentBox/>
              <CommentBox2/>
              <Comment/>
              <TodoList/>
          </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
