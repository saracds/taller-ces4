import React from 'react'

import { BsPencil, BsXLg } from "react-icons/bs";
import { Row, Col} from 'react-bootstrap';

import { Badge } from 'react-bootstrap';


const MovimientoItem = () => {
    return (
            <Row>
                <Col lg = "2"> 
                    <BsXLg className='MovimientoItem-icon'/>
                    <BsPencil className='MovimientoItem-icon'/>
                </Col>
                <Col lg = "5">
                    Salario Freelance
                </Col>
                <Col lg = "5">
                    <Badge bg="success">7,000,000</Badge>
                </Col>
            </Row>
    )
}

export default MovimientoItem