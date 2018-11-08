import React,{Component} from 'react';

import CommentList from './CommentList';
import CommentInput from './CommentInput';

class CommentApp extends Component{

    constructor(){
        super();
        this.state = {
            info:[]
        }
    }
    handleSubmit = (con)=>{
        this.state.info.push(con);
        this.setState({info: this.state.info})
    }
    render(){
        return (
            <div>
                <CommentInput onSubmit={this.handleSubmit}/>
                <CommentList listContent={this.state.info} />
            </div>
        )
    }
}

export  default  CommentApp;