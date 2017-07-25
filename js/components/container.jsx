import React, { Component } from 'react';

// Import components
import SearchContainer from './searchContainer.jsx';
import DisplayContainer from './displayContainer.jsx';
import { isNumberValid, getErrorMessage } from '../validator.js';

export default class Container extends Component {

    constructor(props){
        super(props);
        this.state ={
            companyProfile: null,
            errorMessage: ""
        }
    }

    render() {
        return (
            <div className="container">
                <SearchContainer 
                    errorMessage={this.state.errorMessage} 
                    callback={(compId) => this.handleInputValue(compId)}
                />
                <DisplayContainer companyInformation={this.state.companyProfile}/>
            </div>
        );
    }

    handleInputValue(valueInput) {
        if(isNumberValid(valueInput)) {
            this.setState({
                errorMessage: ""
            });
            this.runApi(valueInput);
        }
        else {
            const message = getErrorMessage(valueInput);
            this.setState({
                errorMessage: message,
                companyProfile: null
            });
        }
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
            if(response.CompanyInformation !== null) {
                this.setState({
                    companyProfile: response.CompanyInformation,
                    errorMessage: ""
                });
            } else {
                console.log("Numer nie występuje w bazie.");
                this.setState({
                    errorMessage: "Numer nie występuje w bazie.",
                    companyProfile: null
                });
            }
        });
    }
}
