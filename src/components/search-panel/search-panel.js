import React, {Component} from "react";
import '../todo-list/todo-list.css'

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <input className="search-input"
                   placeholder="Type here to search"
                   value={this.state.term}
                   onChange={this.onSearchChange}/>
        );
    }
}