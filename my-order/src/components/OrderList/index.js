// 按照这个定义 默认会加载index.js

import React,{Component} from 'react';

import OrderItem from '../OrderItem';

class OrderList extends Component{

    constructor(props){
        super(props)
        this.state = {
            data :[]
        }
    }
    componentDidMount(){ //组件加载
        //http请求
        fetch("/mock/orderdata.json").then(res=>{
           if(res.ok){
                res.json().then(data=>{
                    this.setState({
                        data
                    })
                })
           }
        });
    }

    render(){
        return (
            <div>
                {
                    this.state.data.map(item=>{
                        return <OrderItem key={item.id} data={item}
                                          onSubmitComment={this.submitComment}/>;
                    })
                }

            </div>
        )
    }

    submitComment=(id,comment,stars)=>{
        const  newData = this.state.data.map((item=>{
            return item.id === id ?{
                ...item,comment,stars,ifCommented:true
            }:item
        }))
        this.setState({
            data:newData
        })
    }

}

export  default OrderList;