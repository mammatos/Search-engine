import React, { Component } from 'react';

// Import components
import Search from './search.jsx';
import SearchButton from './searchButton.jsx';
import { isNumberValid } from '../validator.js';

export default class SearchContainer extends Component {
    constructor() {
        super();
        this.state ={
            errorMessage: "",
            errorBorder: ""
        }
    }

    render() {
        return (
            <form onSubmit={event => this.onSubmit(event)}>
                <Search errorBorder={this.state.errorBorder}/>
                <SearchButton/>
                <p>{this.state.errorMessage}</p>
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
            this.setState({
                errorMessage: "",
                errorBorder: ""
            });
        } else if (valueInput.length === 0) {
            this.setState({
                errorMessage: "Nie wpisano numeru.",
                errorBorder: "errorBorder"
            });
        } else if (valueInput.length < 9) {
            this.setState({
                errorMessage: "Wpisany numer jest za krótki.",
                errorBorder: "errorBorder"
            });
        } else if (valueInput.length > 15) {
            this.setState({
                errorMessage: "Wpisany numer jest zbyt długi.",
                errorBorder: "errorBorder"
            });
        } else {
            this.setState({
                errorMessage: "Podany numer jest błędny.",
                errorBorder: "errorBorder"
            });
        }
    }
}
