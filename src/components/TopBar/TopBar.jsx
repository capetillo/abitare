import React from 'react';
import './TopBar.css';

const TopBar = () => {

    return(  
    <div className='TopBar'>
        <ul className='ul'>
            <li className="item"><a href="#" className='anchor'>Todo</a></li>
            <li className="item"><a href="#" className='anchor'>Arquitectura</a></li>
            <li className="item"><a href="#" className='anchor'>Diseño</a></li>
            <li className="item"><a href="#" className='anchor'>Decoración</a></li>
      </ul>
    </div>
    // <div className="TopBar">
    //      <ul className='topbar-list'>
    //             <li className='li' id='all'><span id='topbar'><a href='#all' className='anchor'>All</a></span></li>
    //             <li className='li' id='arquitectura'><span id='topbar'><a href='#arquitectura' className='anchor'>Arquitectura</a></span></li>
    //             <li className='li'><span id='topbar'>Diseño</span></li>
    //             <li className='li'><span id='topbar'>Decoración</span></li>
    //      </ul>
    //     <hr />
    // </div>

//     <div class="container">
//     <ul className='topbar-list'>
//       <li className="li" id="uno"><span id='topbar'><a href='#uno' className='anchor'>Uno</a></span></li>
//   <li className="li" id="dos"><span id='topbar'><a href="#dos" className='anchor'>Dos</a></span></li>
//   <li className="li" id="tres"><a href="#tres" className='anchor'>Tres</a></li>
//   <li className="li" id="quatro"><a href="#quatro" className='anchor'>Quatro</a></li>
//       <hr />
//     </ul>
//   </div>


    )

}

export default TopBar