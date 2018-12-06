import React, { Component } from "react"; 
import img from '../Images/logo.png'; 
import { Navbar, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline} from "mdbreact"; 


class Navigation extends Component { 
    state = { 
        isOpen: false 
    }; 

    toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

    render() { 
        return ( 
            <Navbar color="default-color" dark fixed="top" expand="md" style={{ 
                backgroundColor: '#00bfa5', 
                height: '70px', 
                fontSize: '21px'
            }}> 
                <div className="container"> 
                    <NavbarBrand style={{
                                    position: 'relative', 
                                    left: '-15px'
                                }}> 
                        <strong> 
                            <NavLink className="text-white" to="/">
                                <img height="40px" width="30px" 
                                src={ img } alt="Logo"/> 
                            </NavLink> 
                        </strong> 
                    </NavbarBrand> 
                    <NavbarToggler onClick={this.toggleCollapse} /> 
                    <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar> 
                        <NavbarNav left style={{ 
                                    position: 'relative', 
                                    left: '-35px'
                                }}>
                            <NavItem active>
                                <NavLink to="/">Home</NavLink> 
                            </NavItem> 
                            <NavItem> 
                                <NavLink to="/gym">GYM</NavLink> 
                            </NavItem> 
                            <NavItem> 
                                <Dropdown> 
                                    <DropdownToggle nav caret> 
                                        <div className="d-none d-md-inline">Diet Control</div>
                                    </DropdownToggle> 
                                    <DropdownMenu right> 
                                        <DropdownItem> 
                                            <NavLink className="text-dark" to="/men">Men</NavLink>
                                        </DropdownItem> 
                                        <DropdownItem> 
                                            <NavLink className="text-dark" to="/women">Women</NavLink>
                                        </DropdownItem> 
                                    </DropdownMenu> 
                                </Dropdown> 
                            </NavItem> 
                            <NavItem> 
                                <NavLink to="/about">Feed</NavLink> 
                            </NavItem> 
                            <NavItem> 
                                <NavLink to="/product">My Account</NavLink> 
                            </NavItem> 
                        </NavbarNav> 
                        <NavbarNav right> 
                            <NavItem>
                                <FormInline waves>
                                    <div className="md-form my-0"> 
                                        <input 
                                            className="form-control mr-sm-2"
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                        /> 
                                        <button style={{background: '#45526e'}} className="btn">
                                            <i style={{color: 'white'}} size="lg" 
                                            class="fa fa-search"></i> 
                                        </button>
                                    </div> 
                                </FormInline> 
                            </NavItem> 
                        </NavbarNav> 
                    </Collapse> 
                </div> 
            </Navbar> 
        ); 
    } 
} 

export default Navigation; 






// import React, { Component } from 'react'; 
// import { NavLink } from 'react-router-dom'; 

// class Navigation extends Component { 
//     render() { 
//         return ( 
//             <div className="container"> 
//                 <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//                     <NavLink className="text-light" to="/">
//                         FitnessCalculator
//                     </NavLink> 

//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button> 
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item active">
//                                 <NavLink className="col-md-1 text-light" to="/">
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="col-md-1 text-light" to="/about">
//                                     GYM
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="col-md-1 text-light" to="/product">
//                                     Diet Plan
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="col-md-1 text-light" to="/product">
//                                     Feed
//                                 </NavLink> 
//                             </li>
//                             <li className="nav-item"> 
//                                 <NavLink className="col-md-1 text-light" to="/product">
//                                     My Account
//                                 </NavLink>
//                             </li>
//                         </ul>

//                         <form className="form-inline">
//                             <div className="input-group my-2 mr-sm-0">
//                                 <div className="input-group-prepend">
//                                     <span className="input-group-text" id="basic-addon1">
//                                         <i class="far fa-search"></i>
//                                     </span> 
//                                 </div> 
//                                 <input type="text" className="form-control" placeholder="Enter Problem" aria-label="problem" aria-describedby="basic-addon1" />
//                             </div> 
//                         </form> 
//                     </div> 
//                 </nav> 
//             </div> 
//         ); 
//     } 
// } 

// export default Navigation;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



