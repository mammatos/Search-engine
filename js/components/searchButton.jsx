import React, { Component } from 'react';

export default class searchButton extends Component {

    render() {
        return (
            <input 
                type="submit" 
                value="Pobierz dane"
                onClick={event => this.onClick(event)}
            />
        )          
    }

    onClick(event){
        this.props.mojafunkcja();
    }
}