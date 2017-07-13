import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// Import components
import Container from './components/container.jsx';

class App extends Component {

    render() {
        return <Container/>
    }

}

document.addEventListener('DOMContentLoaded', function(){
    
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});
