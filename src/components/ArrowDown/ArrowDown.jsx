import React from 'react';
import './ArrowDown.css';
import { Link } from 'react-scroll'

const ArrowDown = () => {
    return(
        <div className='ArrowDown-1'>
            <Link
                            id="link"
                            className="nav-link in-down"
                            activeClass="active"
                            to="SectionAHome"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        > 
                        <div className='ArrowDown'> <div className="arrow"></div></div>
                         
                        
                        
                    </Link>
        </div>
    )
}

export default ArrowDown;