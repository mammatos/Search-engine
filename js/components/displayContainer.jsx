import React, { Component } from 'react';

// Import components
import DisplayName from './displayName.jsx';
import DisplayStreet from './displayStreet.jsx';
import DisplayNumber from './displayNumber.jsx';
import DisplayPostcode from './displayPostcode.jsx';
import DisplayCity from './displayCity.jsx';

export default class DisplayContainer extends Component {

    render() {
        return (
            <div>
                <DisplayName/>
                <DisplayStreet/>
                <DisplayNumber/>
                <DisplayPostcode/>
                <DisplayCity/>
            </div>
        );
    }
}