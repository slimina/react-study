import React ,{Component} from 'react';

class CommentList extends Component{
    static defaultProps = {
        listContent : []
    }

    render(){
        return (
            <ul>
                {/*<li>{ this.props.listContent.length }</li>*/}
                {
                    this.props.listContent.map((item,index)=>{
                        return (
                            <li key={index} style={{
                                listStyle: 'none'
                            }}>
                                <span >{item.inpText}--</span>
                                <span>{item.txtText}</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default  CommentList;