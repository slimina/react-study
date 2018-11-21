import React from "react"

class TodoItem extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const {items} = this.props;
        return (
            <ul>
                {
                    items.map((e,idx)=>{
                        return (
                            <li key={idx}>{e}</li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default TodoItem;