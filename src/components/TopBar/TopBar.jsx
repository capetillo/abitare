import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return(
    <div className="TopBar">
         <ul className='topbar-list'>
                <li className='li'><span id='topbar'>All</span></li>
                <li className='li'><span id='topbar'>Arquitectura</span></li>
                <li className='li'><span id='topbar'>Diseño</span></li>
                <li className='li'><span id='topbar'>Decoración</span></li>
                
         </ul>

    </div>
    )
}


export default TopBar