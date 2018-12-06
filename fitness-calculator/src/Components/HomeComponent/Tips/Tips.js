import React, { Component } from 'react'
import f from '../../../Images/f.jpg'; 

class Tips extends Component { 
    render() { 
        const obj = { 
            background: '#E22F24', 
            color: 'white', 
            marginBottom: '30px'
        } 
        const title = { 
            marginTop: '60px'
        } 
        
        return ( 
            <div style={{ marginBottom: '30px' }}>
                <div className="d-flex" style={ obj }> 
                    <div className="col-sm-4"> 
                        <h1 style={ title } className="display-4 text-center "> 
                            Health Tips 
                        </h1> 
                    </div> 
                    <div> 
                        <ul style={{fontSize: '16px'}} className="mt-3"> 
                            <li>2 Liters of water per day</li>
                            <li>5 Fruits & Vegetables per day</li> 
                            <li>5 small meals every day</li> 
                            <li>Dinner no later than 8 pm</li> 
                            <li>Always eat breakfast</li> 
                            <li>Snack on nuts</li> 
                            <li>Eat a high fibre diet so you stay full for longer and don't snack on sugary foods</li> 
                        </ul> 
                    </div> 
                </div> 
                <div className="d-flex"> 
                    <div style={{
                            position: 'relative', 
                            left: '-14px' 
                        }} className="col-sm-3"> 
                        
                        <div className="card">
                            <img src={ f } alt="Farah Gray"/> 
                            <h5 className="card-title text-center mt-2">
                                Farah Gray 
                            </h5> 
                        </div> 
                    </div> 
                    <div style={{border: '1px solid khaki'}} className="text-center"> 
                        <h3 style={{marginTop: '35px'}} className="text-dark display-4"> 
                            Comfort is the enemy of achievement 
                        </h3> 
                    </div> 
                </div> 
            </div> 
        ) 
    } 
} 

export default Tips;