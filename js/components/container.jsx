import React, { Component } from 'react';

// Import components
import SearchContainer from './searchContainer.jsx';
import DisplayContainer from './displayContainer.jsx';

const regExNip = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
const regEx4NipPl = /^pl[0-9]{10}$/i;
const regExNipRegon = /^[0-9]{9,10}$/;
const regEx3Krs = /^krs[0-9]{10}$/i;

const compId = "6137213367";

export default class Container extends Component {

    constructor(props){
        super(props);
        this.state ={
            companyProfile: []
        }
        console.log("response z api", this.state.companyProfile);
    }

    render() {
        return (
            <div className="container">
                <SearchContainer callback={() => this.runApi()}/>
                <DisplayContainer companyInformation={this.state.companyProfile}/>
            </div>
        );
    }

    runApi(compId) {
        $.ajax({
            url: 'http://ihaveanidea.aveneo.pl/NIPAPI/api/Company',
            data:{
                CompanyId: "6137213367"
            }, 
            method: 'GET',
            dataType: 'json'
        })
        .done((response) => {
            console.log(response.CompanyInformation);
            this.setState({
                companyProfile: response.CompanyInformation
            });
        });
    }
}