import React, {Component} from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";
import { Nav, Button} from 'react-bootstrap';


class NavBar extends Component {
    constructor (props) {
        super(props);
        if (typeof window !== 'undefined') {
            let prevScrollPos = window.pageYOffset;
            window.onscroll = function() {
                const maxScroll = document.body.clientHeight - window.innerHeight; //actual height - what's visible
                let currentScrollPos = window.pageYOffset; 
                if (
                    //for safari UX
                    (maxScroll > 0 && prevScrollPos > currentScrollPos && prevScrollPos <= maxScroll) ||
                    (maxScroll <= 0 && prevScrollPos > currentScrollPos) ||
                    (prevScrollPos <= 0 && currentScrollPos <= 0)
                ) {

                    document.getElementById("navbar").style.top = "0";
                    
                    
                    
                } else {
                    // how many rems is the navbar hidden 
                    document.getElementById("navbar").style.top = "-15.0rem";

                }
                prevScrollPos = currentScrollPos
            }
        }
    }
        render () {
            return (
                 <div className="links" id="navbar">
                 
                    <Nav className="navbar navbar-expand-md d-flex justify-content-end">
                
                    {/* <div className="menu-links">
                        <Button id ="boton" className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span id="line1" className="line"></span> 
                            <span id="line2" className="line"></span> 
                            <span id="line3" className="line"></span>
                        </Button>
                    </div> */}
                    <div className="navbar-collapse collapse" id="navbarNav">                 
                        <Link
                            id="link"
                            className="nav-link in-down"
                            to="/"
                            >                     
                            HOME                                
                        </Link>
                        <Link
                            id="link"
                            className="nav-link in-down"
                            to="/projects"
                            >                            
                            PROJECTS                               
                        </Link>
                        <Link
                            id="link"
                            className="nav-link in-down3"                               
                            to="/contact"                                    
                            >                                 
                            CONTACT                            
                        </Link>                      
                    </div>            
                </Nav>                 
            </div>
            )
        }
    }

export default NavBar;