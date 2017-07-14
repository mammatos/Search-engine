import React, { Component } from 'react';

// Import components
import SearchContainer from './searchContainer.jsx';
import DisplayContainer from './displayContainer.jsx';

export default class Container extends Component {

    constructor(props){
        super(props);
        this.state ={
            companyProfile: []
        }
    }

    render() {
        return (
            <div className="container">
                <SearchContainer callback={(compId) => this.runApi(compId)}/>
                <DisplayContainer companyInformation={this.state.companyProfile}/>
            </div>
        );
    }

    /**
     * Makes requests to API with given value.
     * @param {String} compId  value from input.
     */
    runApi(compId) {
        console.log("funkcja runApi", compId);
        $.ajax({
            url: 'http://ihaveanidea.aveneo.pl/NIPAPI/api/Company',
            data:{
                CompanyId: compId
            }, 
            method: 'GET',
            dataType: 'json'
        })
        .done((response) => {
            console.log("odpowiedź API:", response.CompanyInformation);
            this.setState({
                companyProfile: response.CompanyInformation
            });
        });
    }
}
