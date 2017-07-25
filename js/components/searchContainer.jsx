import React, { Component } from 'react';

// Import components
import Search from './search.jsx';
import SearchButton from './searchButton.jsx';

export default class SearchContainer extends Component {
    render() {
        return (
            <form onSubmit={event => this.onSubmit(event)}>
                <Search errorBorder={this.props.errorMessage !== "" ? "errorBorder" : ""}/>
                <SearchButton/>
                <p>{this.props.errorMessage}</p>
            </form>
        );
    }

    /**
     * Handle onSubmit event.
     * Sends input value to the callback function.
     * @param {Object} event  Event object.
     */
    onSubmit(event) {
        event.preventDefault();
        console.log("submit wykowanany");
        console.log("jak wygląda event przy kliku", event.target[0].value);
        const valueInput = event.target[0].value;
        this.props.callback(valueInput);
    }
}
