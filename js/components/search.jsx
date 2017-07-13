import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    render() {
        return (
                <label>
                    NIP/KRS/REGON
                    <input 
                        type="text" 
                        name="searchNumber" 
                        placeholder="Podaj numer" 
                        value={this.state.inputValue} 
                        onChange={event => this.handleInputValueChange(event)}
                    />
                </label>
        );
    }


    /**
     * Handle onChange event.
     * Change state when user change the value of input.
     * @param {Object} event  Event object.
     */
    handleInputValueChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }
}
