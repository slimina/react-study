import React ,{Component} from 'react';

//父组件向子组件通过属性传递参数
//子组件通过props接收

//子组件向父组件传递数据通过父组件传递过来的方法传递，
class TodoItem extends Component{

    constructor(props){
        super(props);
       // this.handleDelete = this.handleDelete.bind(this);
    }

    //this 设置为当前对象
    handleDelete=()=>{
        this.props.delete(this.props.idx);
    }
    render(){
        const  {content} = this.props;
        return (
            <div
                onClick={this.handleDelete}>{content}</div>
        );
    }
}

export default  TodoItem;