import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return(
    <div className="TopBar">
         <ul className='topbar-list'>
                <li className='li'><a href="#" id='topbar'>All</a></li>
                <li className='li'><a href="#" id='topbar'>Arquitectura</a></li>
                <li className='li'><a href="#" id='topbar'>Diseño</a></li>
                <li className='li'><a href="#" id='topbar'>Decoración</a></li>
         </ul>

    </div>
    )
}


export default TopBar