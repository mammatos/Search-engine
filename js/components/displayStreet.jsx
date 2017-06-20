import React, { Component } from 'react';

export default class DisplayStreet extends Component {

    render() {
        return (
            <div>
                <label htmlFor="street">Ulica</label>
                <input type="text" id="street" name="displayStreet"/>
            </div>
        );
    }
}