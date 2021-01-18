import React , { Component } from 'react';
import './HomeBottom.css';
import SectionAHome from '../../Components/SectionAHome/SectionAHome';
import SectionBHome from '../../Components/SectionBHome/SectionBHome';

class HomeBottom extends Component {

  render() {
    return (
    <div className='HomeBottom'>
      <div className='bottom-home'>
        <SectionAHome />
        <SectionBHome />
      </div>
    </div>
    )
  }
}

export default HomeBottom;

