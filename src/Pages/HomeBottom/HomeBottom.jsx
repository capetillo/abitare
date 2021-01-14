import React , { Component } from 'react';
import './HomeBottom.css';
import SectionAHome from '../../Components/SectionAHome/SectionAHome';


class HomeBottom extends Component {

  render() {
    return (
    <div className='HomeBottom'>
      <div className='bottom-home'>
        <SectionAHome />
      </div>
    </div>
    )
  }
}

export default HomeBottom;

