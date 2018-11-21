import React from "react"

import PropTypes from "prop-types"

class Footer extends React.Component{

    renderFilter=(filter,name)=>{
        if(filter === this.props.filter){
            return name;
        }
        return (
            <a href="#" onClick={e=>{
                this.props.onFilterChange(filter);
                e.preventDefault();
            }}>
                {name}
            </a>
        )
    }

    render(){
        return (
            <div className="filter">
                <p>
                    展示:
                    {' '}
                    {this.renderFilter('SHOW_ALL','全部')}
                    {' | '}
                    {this.renderFilter('SHOW_COMPLETED','已完成')}
                    {' | '}
                    {this.renderFilter('SHOW_ACTIVE','未完成')}
                </p>
            </div>
        )
    }
}

Footer.propTypes = {
    filter: PropTypes.oneOf([
        'SHOW_ALL','SHOW_COMPLETED','SHOW_ACTIVE'
    ]).isRequired,
    onFilterChange: PropTypes.func.isRequired
}
export default Footer;