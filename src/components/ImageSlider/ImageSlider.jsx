import React, { Component } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
      return (
        <div id='home' class='panel'>
            <div class='inner'>
                <div id='backgroundchange'>
                    <div class='backgroundimg' id='back1'></div>
                    <div class='backgroundimg' id='back2'></div>
                    <div class='backgroundimg' id='back3'></div>
                    <div class='backgroundimg' id='back4'></div>
                    <div class='backgroundimg' id='back5'></div>
                </div>
            </div>
        </div>
      );
    }
  

  export default ImageSlider;