import React, { useState } from 'react'

import { BsPencil, BsXLg } from "react-icons/bs";
import { Row, Col } from 'react-bootstrap';

import { Badge } from 'react-bootstrap';

const MovimientoItem = ({ handleDelete, movimiento, formatNumber, setEditar }) => {

    return (
        <Row>
            <Col lg="2">
                <BsXLg className='MovimientoItem-icon' onClick={() => handleDelete(movimiento.id)} />
                <BsPencil className='MovimientoItem-icon' onClick={() => setEditar(movimiento)} />
            </Col>
            <Col lg="5">{movimiento.nombre}</Col>
            <Col lg="5">
                <Badge bg={`${movimiento.tipo_movimiento === "Gasto" ? "danger" : "success"}`}>{formatNumber(movimiento.cantidad)}</Badge>
            </Col>
        </Row>
    )
}

export default MovimientoItem