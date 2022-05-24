import React from 'react'

import { BsPencil, BsXLg } from "react-icons/bs";
import { Row, Col} from 'react-bootstrap';

import { Badge } from 'react-bootstrap';


const MovimientoItem = ({nombre, cantidad, tipoMovimiento}) => {
    return (
            <Row>
                <Col lg = "2"> 
                    <BsXLg className='MovimientoItem-icon'/>
                    <BsPencil className='MovimientoItem-icon'/>
                </Col>
                <Col lg = "5">{nombre}</Col>
                <Col lg = "5">
                    <Badge bg= {`${tipoMovimiento === "Gasto" ? "danger" : "success"}`}>{cantidad}</Badge>
                </Col>
            </Row>
    )
}

export default MovimientoItem