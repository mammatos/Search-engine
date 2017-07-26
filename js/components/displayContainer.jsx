import React, { Component } from 'react';

// Import components
import DisplayName from './displayName.jsx';
import DisplayStreet from './displayStreet.jsx';
import DisplayNumber from './displayNumber.jsx';
import DisplayPostcode from './displayPostcode.jsx';
import DisplayCity from './displayCity.jsx';
import Loader from './loader.jsx';

export default class DisplayContainer extends Component {
    render() {
            if(this.props.showLoader) {
                return <Loader />;
            } 
        
        if (this.props.companyInformation === null) {
            return null;
        }
        const {
            Name,
            Street,
            HouseNumber,
            PostalCode,
            Community
        } = this.props.companyInformation;
        return (
            <div>
                <DisplayName name={Name}/>
                <DisplayStreet street={Street}/>
                <DisplayNumber num={HouseNumber}/>
                <DisplayPostcode postcode={PostalCode}/>
                <DisplayCity city={Community}/>
            </div>
        );
    }
}
