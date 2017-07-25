import React, { Component } from 'react';

export default class DisplayNumber extends Component {

    render() {
        return (
            <div>
                <label htmlFor="number">Nr</label>
                <input
                    type="text"
                    id="number"
                    name="displayNumber"
                    value={this.props.num}
                    readOnly
                />
            </div>
        );
    }
}

DisplayNumber.defaultProps = {
    num: ""
};
