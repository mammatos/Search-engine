import React, { Component } from 'react';

// Import components
import Search from './search.jsx';
import SearchButton from './searchButton.jsx';

export default class SearchContainer extends Component {

    render() {
        return (
            <form onSubmit={event => this.onSubmit(event)}>
                <Search/>
                <SearchButton mojafunkcja={() => this.handleButtonClicked()}/>
            </form>
        );
    }

    onSubmit(event) {
        event.preventDefault();
        console.log("submit wykowanany");
    }

    handleButtonClicked() {
        this.props.callback();
    }
}