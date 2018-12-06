import React, { Component } from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';

import Address from '../../Address/Address'; 
import Copyright from '../../copyright/Copyright';


class Water extends Component { 
    render() { 
        return ( 
            <div>
                <h1 className="text-center mt-3 display-4"> 
                    Water Chart 
                </h1>
                <div className="offset-md-3 col-md-6"> 
                    <div> 
                        <Table responsive striped bordered hover className="text-center"
                        > 
                            <TableHead 
                                style={{background: '#33b5e5'}}> 
                                <tr> 
                                    <th>Age</th> 
                                    <th>Litre/day</th> 
                                </tr> 
                            </TableHead> 
                            <TableBody> 
                                <tr> 
                                    <td>1 to 3</td> 
                                    <td>1.3</td> 
                                </tr> 
                                <tr> 
                                    <td>4 to 8</td> 
                                    <td>1.7</td> 
                                </tr> 
                                <tr> 
                                    <td>9 to 13</td> 
                                    <td>2.1</td> 
                                </tr> 
                                <tr> 
                                    <td>14 to 18</td> 
                                    <td>2.3</td> 
                                </tr> 
                                <tr> 
                                    <td>19 to 50</td> 
                                    <td>2.7</td> 
                                </tr> 
                                <tr> 
                                    <td>51+</td> 
                                    <td>2.7</td> 
                                </tr> 
                            </TableBody> 
                        </Table> 

                        <h1 className="display-4 text-center" 
                            style={{
                                fontSize: '30px'
                            }}
                        > 
                            This list has taken from DRI Report 
                        </h1> 
                    </div> 
                </div> 
                
                <p style={{fontSize: '18px'}}> 
                    The given list is only valid for healthy girt & women.  
                </p>  

                <ul style={{fontSize: '18px'}} className="mb-5">
                    <li>If you are suffering from <strong> fever or diarea </strong>, you must drink more water.</li> 
                    <li>If you are suffering from <strong>Kidni problem </strong>, you must drink less water.</li> 
                    <li>During pregnancy, a woman should drink more water.</li> 
                    <li>If one do regular exercises or hard work, drink more water.</li> 
                    <li>Depends on weather, the amount of water may change.</li> 
                </ul> 

                <Address /> 
                <Copyright /> 
            </div> 
        ) 
    } 
} 

export default Water;