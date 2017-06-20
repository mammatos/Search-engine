import React, { Component } from 'react';

export default class DisplayNumber extends Component {

    render() {
        return (
            <div>
                <label htmlFor="number">Nr</label>
                <input type="text" id="number" name="displayNumber"/>
            </div>
        );
    }
}