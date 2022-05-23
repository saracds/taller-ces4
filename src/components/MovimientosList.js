import React from 'react'

import { Badge, Card, ListGroup, Row, Col } from 'react-bootstrap';

import Busqueda from './Busqueda';
import MovimientoItem from './MovimientoItem';

const MovimientosList = () => {
    return (
        <Card className='text-center'>
      <Card.Body>
        <Card.Title className='justify-content-betwee'>
            <Row>
                <Col>
                    Listado Movimientos 
                </Col>
                <Col>
                    <Badge bg="primary">9</Badge> 
                </Col>
            </Row>
        </Card.Title>
        <hr/>
        <Card.Text>
            <Busqueda/>
            <ListGroup as = "ul">
                <ListGroup.Item> <MovimientoItem /> </ListGroup.Item>
            </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default MovimientosList