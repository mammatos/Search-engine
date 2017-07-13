import React, { Component } from 'react';

// Import components
import Search from './search.jsx';
import SearchButton from './searchButton.jsx';
import { isNumberValid } from '../validator.js';

export default class SearchContainer extends Component {

    render() {
        return (
            <form onSubmit={event => this.onSubmit(event)}>
                <Search/>
                <SearchButton/>
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
        if(isNumberValid(valueInput)) {
            this.props.callback(valueInput);
        } else {
            alert("zły numer");
        }
    }
}
