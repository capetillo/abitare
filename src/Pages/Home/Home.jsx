import React , { Component } from 'react';
import './Home.css';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import NavBar from '../../Components/NavBar/NavBar';
import SectionAHome from '../../Components/SectionAHome/SectionAHome';


class Home extends Component {

  render() {
    return (
    <div className='Home'>
      <div className='top-home'>
        <NavBar />
        <ImageSlider />
      </div>
    </div>
    )
  }
}

export default Home;

