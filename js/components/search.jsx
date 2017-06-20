import React, { Component } from 'react';

export default class Search extends Component {

    render() {
        return (
            <div>
                <label htmlFor="search">nip/krs/regon</label>
                <input type="text" id="search" name="searchNumber" placeholder="Podaj numer" />
            </div>
        );
    }
}