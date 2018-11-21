import React from "react";

import QueryString from "query-string"

export default class RouterOne extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        console.log(QueryString.parse("?abc=123&name=tom"))
        return (
            <h1>Router one !.....</h1>
        )
    }
}