import React,{Component,Fragment} from 'react';

import TodoItem from './TodoItem'

class TodoList extends Component {
    constructor(props){//构造函数
        super(props);
        this.state={
            list:[],
            inputValue:''
        }
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleBtnClick(){
        // 错误 this.state.list.push("hello word");
        this.setState({
            // ... 展开运算符
            list:[...this.state.list,this.state.inputValue],
            inputValue:""
        });
    }

    handleInputChange(e){
        this.setState({
            inputValue : e.target.value
        });
    }

    handleItemClick(idx){
        const  list = [...this.state.list]
        list.splice(idx,1);
        this.setState({
            list //key 和 value一样 可以省略一个
        });
    }
    handleDelete(idx){
        this.handleItemClick(idx);
    }

    /* <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
              *  this.handleInputChange.bind(this) 通过构造函数绑定this的指向可以提高性能
              * */
    getTodoItems(){
        return (
            this.state.list.map((item,idx)=>{
                //元素需包含key元素  且唯一
                //return <li key={idx} onClick={this.handleItemClick(idx)}>{item}</li>
                return ( //通过()多行展示
                    <TodoItem
                        delete={this.handleDelete}
                        key={idx}
                        content={item}
                        idx={idx}/>
                )
            })
        )
    }
  render() {
    //jsx 语法

    //只能返回一个包裹元素 ,如果必须返回多个元素使用 React.Fragment标签
    return (
        //<div>
            <Fragment>
          <div>
              <input value={this.state.inputValue} onChange={this.handleInputChange}/>
              <button className='red-btn' style={{color:'#fff'}} onClick={this.handleBtnClick}>add</button>
          </div>
          <ul>
              {
                  this.getTodoItems()
              }
          </ul>
        </Fragment>
      //</div>
    );
  }
}

export default TodoList;
