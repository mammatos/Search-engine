import React, { Component } from 'react';

export default class DisplayPostcode extends Component {

    render() {
        return (
            <div>
                <label htmlFor="postcode">Kod pocztowy</label>
                <input type="text" id="postcode" name="displayPostcode" value={this.props.postcode}/>
            </div>
        );
    }
}

DisplayPostcode.defaultProps = {
    postcode: ""
};
