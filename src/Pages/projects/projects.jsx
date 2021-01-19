import React from 'react';
import './Projects.css';
import image from '../../Images/placeholder.jpg';
import image2 from '../../Images/placeholder2.jpg';
import { Row, Col } from 'react-bootstrap'



const Projects = () => {
      return (
        <div id='/projects' className='Projects' >

          <Row  className='mt-5 pt-5 my-auto pl-3'>
          
            <Col lg={4} className='mt-5 pt-5'>
            <a href='temporary'>
            <div class="img__wrap">
              <img class="img__img" src={image2} />
                <div class="img__description_layer">
                  <p class="img__description">This image looks super neat.</p>
                </div>
            </div>
            </a>
            </Col>
   
            <Col lg={4} className='mt-5 pt-5'> <img src={image} alt=""/> </Col>
            
            <Col lg={4} className='mt-5 pt-5'> <img src={image} alt=""/> </Col>
  
         
          </Row>
          <Row className='mt-5 pt-5 my-auto pl-3'>

            <Col lg={4}> <img src={image} alt=""/> </Col>
   
            <Col lg={4}> <img src={image} alt=""/> </Col>
            
            <Col lg={4}> <img src={image} alt=""/> </Col>
  

          </Row>
          <Row className='mt-5 pt-5 my-auto pl-3 pb-5 mb-5'>

            <Col lg={4}> <img src={image} alt=""/> </Col>
   
            <Col lg={4}> <img src={image} alt=""/> </Col>
            
            <Col lg={4}> <img src={image} alt=""/> </Col>
  

          </Row>
          {/* <Container className='Projects' >
          <Row className='mt-5 pt-5'>

            <Col lg={4}> <img src={image} alt=""/> </Col>
   
            <Col lg={4}> <img src={image} alt=""/> </Col>
            
            <Col lg={4}> <img src={image} alt=""/> </Col>
  

          </Row>
        </Container> */}
        </div>
      );
    }
  

  export default Projects;