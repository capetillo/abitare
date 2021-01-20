import React from 'react';
import './CasaFiesta.css';
import { Row, Col } from 'react-bootstrap';
import image from '../../Images/Foto50.jpg';
import image2 from '../../Images/Foto72.jpg';


const CasaFiesta = () => {
    return(
        <div className='CasaFiesta'>
    
            <Row className='pt-2'>
                <Col lg={6}>
                    <img src={image} alt='placeholder' className='casa-fiesta-img'/>
                </Col>
                <Col lg={3}></Col>
                <Col lg={2}>
                    <div className='project1'>
                        <h1>lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, provident, accusantium, deserunt odit explicabo repudiandae ipsam architecto doloribus magni sapiente natus placeat aliquam iste eius dolor voluptatibus! Exercitationem, ipsa pariatur!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, molestias. In accusamus eum libero voluptas ab alias veniam ipsam reiciendis error sequi, amet distinctio rerum illo cum. Nemo, omnis totam?
                            </p>
                    </div>
                </Col>
               
            </Row>
            <Row className='pt-5' id='row2'>
                
                <Col lg={3}>
                    <img src={image2} alt=""/>
                </Col>
                <div id='space'></div>
                <Col lg ={3}>
                    <img src={image2} alt=""/>
                </Col>
                
            </Row>
            <Row className='pt-5'>
                <Col lg={6}>
                    <img src={image} alt='placeholder' className='casa-fiesta-img'/>
                </Col>
                <Col lg={3}></Col>
               
            </Row>
            <Row className='pt-5' id='row2'>
                
                <Col lg={3}>
                    <img src={image2} alt=""/>
                </Col>
                <div id='space'></div>
                <Col lg ={3}>
                    <img src={image2} alt=""/>
                </Col>
                
            </Row>
           
        </div>
    )
}

export default CasaFiesta;