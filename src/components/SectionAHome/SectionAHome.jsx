import React from 'react';
import './SectionAHome';
import image1 from '../../Images/red2.jpg';
import { Row, Col } from 'react-bootstrap';

const SectionAHome = () => {
    return (
        <div className='SectionAHome'>
            <Row className="d-flex align-items-center justify-content-center mt-5 pt-5">
                    <div className="section-a-header">
                        <p className="section-a-title">lorem ipsum</p>
                    </div>
                </Row>
            <Row className='mt-2 mb-5'>
                <Col md={2}></Col>
                <Col  md={4} className="d-flex align-items-center justify-content-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officiis est iusto maiores sed laborum debitis temporibus accusantium? Culpa accusamus ipsa nisi nam laboriosam est aut minus similique sed obcaecati.
                </Col>
                <Col  md={4} className="d-flex align-items-center justify-content-center">
                    <div className='image1'>
                        <img src={image1} />
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>
        </div>
    )
}

export default SectionAHome;