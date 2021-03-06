import React from 'react';
import './SectionBHome.css';
import image1 from '../../Images/red2.jpg';
import { Row, Col } from 'react-bootstrap';

const SectionBHome = () => {
    return (
        <div className='SectionBHome'>
            <Row className="d-flex align-items-center justify-content-center pb-5 pt-5">
            <Col md={2}></Col>
            <Col sm={12} md={4} className="pb-5 pt-5 text-left mr-5">
                    <h1 className='lorem-title'>
                         Lorem Ipsum
                    </h1>
                    <div className='lorem-content'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque laudantium optio voluptatum? Dolor asperiores perferendis debitis culpa amet facilis aut facere quia quibusdam harum, laudantium mollitia veniam nihil beatae!
                    </p>
                    </div>
                </Col>
                <Col sm={12} md={4} className="pb-5 pt-5">
                    <div className="project-span">
                        <img src={image1} alt="temporary placeholder" className="placeholder1"/>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>
        </div>
    )
}

export default SectionBHome;