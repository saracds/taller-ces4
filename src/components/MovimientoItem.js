import React,{useState} from 'react'

import { BsPencil, BsXLg } from "react-icons/bs";
import { Row, Col } from 'react-bootstrap';

import { Badge } from 'react-bootstrap';

import ModalEdit from './ModalEdit';


const MovimientoItem = ({ handleDelete, movimiento, handleMovimiento, handleAgregarMovimiento, formatNumber }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Row>
            <Col lg="2">
                <BsXLg className='MovimientoItem-icon' onClick={() => handleDelete(movimiento.id)} />
                <BsPencil className='MovimientoItem-icon' onClick={handleShow} />
            </Col>
            <Col lg="5">{movimiento.nombre}</Col>
            <Col lg="5">
                <Badge bg={`${movimiento.tipo_movimiento === "Gasto" ? "danger" : "success"}`}>{formatNumber(movimiento.cantidad)}</Badge>
            </Col>
            <ModalEdit
                show={show}
                handleClose={handleClose}
                movimiento={movimiento}
                handleMovimiento={handleMovimiento}
                handleAgregarMovimiento={handleAgregarMovimiento}
            />
        </Row>
    )
}

export default MovimientoItem