import React, { Component } from 'react';

const regExNip = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
const regEx4NipPl = /^pl[0-9]{10}$/i;
const regExNipRegon = /^[0-9]{9,10}$/;
const regEx3Krs = /^krs[0-9]{10}$/i;

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

    handleInputValueChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }


}