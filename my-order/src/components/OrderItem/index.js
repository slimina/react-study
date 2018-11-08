// 按照这个定义 默认会加载index.js

import React,{Component} from 'react';

import './style.css'

class OrderItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            stars: props.data.stars || 0,
            editing:false,
            comment:props.data.comment || "",
        }
    }

    render(){
        const {shop,product,price,picture,ifCommented} = this.props.data;
        return (
            <div className="orderItem">
                <div className='orderInfo'>
                    <div className='picContainer'>
                        <img className='pic' src={picture} />
                    </div>
                    <div className='content'>
                        <div className='product'>{product}</div>
                        <div className='shop'>{shop}</div>
                        <div className='price'>¥{price}</div>
                    </div>
                    <div className='detail'>
                        {
                            ifCommented ?(
                                <div >
                                    <button className='btn disabled'>已评价</button>
                                </div>
                            ):(
                                <div >
                                    <button className='btn' onClick={this.handleOpenEditArea}>评价</button>
                                </div>
                            )
                        }
                    </div>
                </div>
                {this.state.editing ? this.renderEditArea():null}
            </div>
        )
    }

    renderEditArea(){
        return (
            <div className="evaluate">
                <textarea onChange={this.changeCommentHandle} value={this.state.comment} />
                {this.renderStars()}
                <button className="submit" onClick={this.handleSumitComment}>提交</button>
                <button className="cacnel" onClick={this.handleCacelComment}>取消</button>
            </div>
        )
    }

    renderStars(){
        const {stars} = this.state;
        return(
            <div className="stars">
                {
                    [1,2,3,4,5].map((item,index)=>{
                        const _class =  stars >= item ? "red":"";
                        return (
                            <span onClick={this.clickHandleStars.bind(this,item)} key={index} className={_class}>★</span>
                        )
                    })
                }
            </div>
        )
    }

    handleOpenEditArea=()=>{
        this.setState({
            editing : true
        })
    };

    changeCommentHandle=(e)=>{
        this.setState({
            comment : e.target.value
        })
    };
    clickHandleStars=(stars)=>{
        this.setState({
            stars : stars
        })
    };
     handleCacelComment=()=>{
        this.setState({
            stars: this.props.data.stars || 0,
            editing:false,
            comment:this.props.data.comment || "",
        })
    };
    handleSumitComment=()=>{
        const {id} = this.props.data;
        const {comment,stars}=this.state;
        this.setState({
            editing:false
        });
        this.props.onSubmitComment(id,comment,stars);
    }
}

export  default OrderItem;