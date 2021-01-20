import React from 'react';
import './Projects.css';
import TopBar from '../../Components/TopBar/TopBar';
import image2 from '../../Images/placeholder2.jpg';
import { Row } from 'react-bootstrap';



const Projects = () => {
      return (
        <div id='/projects' className='Projects' >
          <Row className='justify-content-center pt-2'>
            <TopBar />
          </Row>
          <Row  className='pt-3' id='container'>
            <a href='projects/casa-fiesta'>
            <div class="img__wrap">
              <img class="img__img" src={image2} />
                <div class="img__description_layer">
                  <p class="img__description">Casa Fiesta</p>
                </div>
            </div>
            </a>
            <a href='temporary'>
            <div class="img__wrap">
              <img class="img__img" src={image2} />
                <div class="img__description_layer">
                  <p class="img__description">This image looks super neat.</p>
                </div>
            </div>
            </a>
            <a href='temporary'>
            <div class="img__wrap">
              <img class="img__img" src={image2} />
                <div class="img__description_layer">
                  <p class="img__description">This image looks super neat.</p>
                </div>
            </div>
            </a>
  
         
          </Row>
          <Row id='container'>
            <a href='temporary'>
            <div class="img__wrap">
              <img class="img__img" src={image2} />
                <div class="img__description_layer">
                  <p class="img__description">This image looks super neat.</p>
                </div>
            </div>
            </a>
            <a href='temporary'>
            <div class="img__wrap">
              <img class="img__img" src={image2} />
                <div class="img__description_layer">
                  <p class="img__description">This image looks super neat.</p>
                </div>
            </div>
            </a>
            <a href='temporary'>
            <div class="img__wrap">
              <img class="img__img" src={image2} />
                <div class="img__description_layer">
                  <p class="img__description">This image looks super neat.</p>
                </div>
            </div>
            </a>
  
         
          </Row>
          <Row  className='mb-5 pb-5' id='container'>
            <a href='temporary'>
            <div class="img__wrap">
              <img class="img__img" src={image2} />
                <div class="img__description_layer">
                  <p class="img__description">This image looks super neat.</p>
                </div>
            </div>
            </a>
            <a href='temporary'>
            <div class="img__wrap">
              <img class="img__img" src={image2} />
                <div class="img__description_layer">
                  <p class="img__description">This image looks super neat.</p>
                </div>
            </div>
            </a>
            <a href='temporary'>
            <div class="img__wrap">
              <img class="img__img" src={image2} />
                <div class="img__description_layer">
                  <p class="img__description">This image looks super neat.</p>
                </div>
            </div>
            </a>
  
         
          </Row>
        </div>
      );
    }
  

  export default Projects;