import React, { Component } from 'react';
import Slider from './Slider/Slider';
import Messages from './Message/Message'; 
import Tips from './Tips/Tips'; 
import Address from './Address/Address'; 
import Copyright from './copyright/Copyright'; 

class Home extends Component { 
    render() { 
        return ( 
            <div className="container"> 
                <div style={{height: '70px'}}></div>
                <Slider /> 
                <Messages /> 
                <Tips /> 
                <Address /> 
                <Copyright /> 
            </div> 
        ); 
    } 
} 

export default Home; 







