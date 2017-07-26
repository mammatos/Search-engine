import React, { Component } from 'react';

export default class DisplayCity extends Component {
    render() {
        return (
            <div>
                <label htmlFor="city">Miasto</label>
                <input 
                    type="text"
                    id="city"
                    name="displayCity"
                    value={this.props.city}
                    readOnly
                />
            </div>
        );
    }
}

DisplayCity.defaultProps = {
    city: ""
};
