import React, { Component } from 'react';

export default class DisplayName extends Component {

    render() {
        return (
            <div>
                <label htmlFor="name">Nazwa</label>
                <input type="text" id="name" name="displayName"/>
            </div>
        );
    }
}