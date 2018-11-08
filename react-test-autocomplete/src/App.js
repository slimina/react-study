import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete';
import {getStocks, matchStocks} from './data';
import './App.css';

class App extends Component {

    state = {
        value: ''
    };
    render() {
        return (
            <Autocomplete
                value={this.state.value}
                inputProps={{ id: 'states-autocomplete' }}
                wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                items={getStocks()}
                getItemValue={(item) => item.name}
                shouldItemRender={matchStocks}
                onChange={(event, value) => this.setState({ value })}
                onSelect={value => this.setState({ value })}
                renderMenu={children => (
                    <div className="menu">
                        {children}
                    </div>
                )}
                renderItem={(item, isHighlighted) => (
                    <div
                        className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                        key={item.abbr}
                    >{item.name}</div>
                )}
            />
    );
    }
}
export default App;