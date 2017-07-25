import React, { Component } from 'react';

export default class DisplayStreet extends Component {

    render() {
        return (
            <div>
                <label htmlFor="street">Ulica</label>
                <input
                    type="text"
                    id="street"
                    name="displayStreet"
                    value={this.props.street}
                    readOnly
                />
            </div>
        );
    }
}

DisplayStreet.defaultProps = {
    street: ""
};
