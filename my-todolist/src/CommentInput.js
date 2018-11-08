import React ,{Component} from 'react';

class CommentInput extends Component{

    handleClick = ()=>{
        const inpText = this.refs.inp.value;
        const txtText = this.refs.txt.value;
        if(this.props.onSubmit){
            this.props.onSubmit({inpText,txtText});
        }
    }
    render(){
        return(
            <div>
                <input ref="inp" style={{
                    display:"block",
                    width: 300
                }}/>
                <textarea ref="txt" style={{
                    display: 'block',
                    width: 300,
                    height: 100,
                    marginTop: 20
                }}>
                </textarea>
                <button onClick={this.handleClick}>发布</button>
            </div>
        );
    }
}

export  default CommentInput;