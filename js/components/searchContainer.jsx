import React, { Component } from 'react';

// Import components
import Search from './search.jsx';
import SearchButton from './searchButton.jsx';

export default class SearchContainer extends Component {

    render() {
        return (
            <form>
                <Search/>
                <SearchButton/>
            </form>
        );
    }
}