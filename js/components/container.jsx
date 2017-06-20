import React, { Component } from 'react';

// Import components
import SearchContainer from './searchContainer.jsx';
import DisplayContainer from './displayContainer.jsx';

export default class Container extends Component {

    render() {
        return (
            <div className="container">
                <SearchContainer/>
                <DisplayContainer/>
            </div>
        );
    }
}