import React, { Component } from 'react';
import { NavLink } from 'mdbreact';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import Routine from './Routine';
import Water from './Water';
import FoodPlan from './FoodPlan';
import Calculator from './Calculator';


class Women extends Component {
    render() {
        return (
            <div style={{marginTop: '70px'}} className="container"> 
                <Tabs defaultIndex={0}> 
                    <TabList style={{background: '#fb8c00'}}    
                            className="text-white"> 
                        <Tab style={{
                                width: '257px', 
                                textAlign: 'center', 
                                height: '50px', 
                                lineHeight: '30px', 
                                fontSize: '20px', 
                                border: '0'
                            }}> 
                            Routine 
                        </Tab> 
                        <Tab style={{
                                width: '257px', 
                                textAlign: 'center', 
                                height: '50px', 
                                lineHeight: '30px', 
                                fontSize: '20px', 
                                border: '0'
                            }}> 
                            Water 
                        </Tab> 
                        <Tab style={{
                                width: '257px', 
                                textAlign: 'center', 
                                height: '50px', 
                                lineHeight: '30px', 
                                fontSize: '20px', 
                                border: '0'
                            }}> 
                            Food Plan 
                        </Tab> 
                        <Tab style={{
                                width: '257px', 
                                textAlign: 'center', 
                                height: '50px', 
                                lineHeight: '30px', 
                                fontSize: '20px', 
                                border: '0'
                            }}> 
                            Calculator 
                        </Tab> 
                    </TabList> 



                    <TabPanel> 
                        <Routine /> 
                    </TabPanel> 
                    <TabPanel> 
                        <Water /> 
                    </TabPanel> 
                    <TabPanel> 
                        <FoodPlan/> 
                    </TabPanel> 
                    <TabPanel> 
                        <Calculator /> 
                    </TabPanel> 
                </Tabs> 
            </div> 
        ) 
    } 
} 

export default Women;


/////////////////////////////////////////


// <div style={{
//         height: '80px', 
//         lineHeight: '55px', 
//         fontSize: '30px'
//     }} className="d-flex text-center text-white bg-dark"> 
//     <div className="col-md-6"> 
//         <NavLink className="text-white" to="/men">
//             Routine 
//         </NavLink> 
//     </div> 
//     <div className="col-md-6"> 
//         <NavLink className="text-white" to="/men">
//             Food Plan 
//         </NavLink> 
//     </div> 
// </div> 