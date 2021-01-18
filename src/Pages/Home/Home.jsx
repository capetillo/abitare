import React , { Component } from 'react';
import './Home.css';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import ArrowDown from '../../Components/ArrowDown/ArrowDown';
import SectionAHome from '../../Components/SectionAHome/SectionAHome';
import SectionBHome from '../../Components/SectionBHome/SectionBHome';


class Home extends Component {

  render() {
    return (
    <div className='Home' id="/">
      <div className='top-home'>
        <ImageSlider />
        <ArrowDown />
        <SectionAHome />
        <SectionBHome />
      </div>

 
    </div>
    )
  }
}

export default Home;

