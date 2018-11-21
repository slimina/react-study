import React from 'react'


const NameCard = (props)=>{
    const {name,number,isHuman,tags} = props //属性为只读
    return (
        <div className="alert alert-success">
            <h4 className="alert-heading">{name}</h4>
            <ul>
                <li>电话: {number}</li>
                <li>{isHuman? "人类":"外星生物"}</li>
                <hr/>
                <p>
                    {
                        tags.map((tag,idx)=>(
                            <span className="badge badge-pill badge-primary" key={idx}>{tag}</span>
                        ))
                    }
                </p>
            </ul>
        </div>
    )
}

/*
类的写法
class NameCard extends React.Component{
    render(){
        const {name,number,isHuman,tags} = this.props //属性为只读
        return (
            <div className="alert alert-success">
                <h4 className="alert-heading">{name}</h4>
                <ul>
                    <li>电话: {number}</li>
                    <li>{isHuman? "人类":"外星生物"}</li>
                    <hr/>
                    <p>
                        {
                            tags.map((tag,idx)=>(
                                <span className="badge badge-pill badge-primary" key={idx}>{tag}</span>
                            ))
                        }
                    </p>
                </ul>
            </div>
        )
    }
}*/

export  default  NameCard;