import React from "react";

import { Badge, Card, ListGroup, Row, Col } from "react-bootstrap";

import Busqueda from "./Busqueda";
import MovimientoItem from "./MovimientoItem";

const MovimientosList = ({ movimientos }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title className="justify-content-betwee">
          <Row>
            <Col>Listado Movimientos</Col>
            <Col>
              <Badge bg="primary">{movimientos.length}</Badge>
            </Col>
          </Row>
        </Card.Title>
        <hr />
        <Card.Text>
          <Busqueda />
          <ListGroup as="ul">
            {movimientos.map((movimiento) => (
              <ListGroup.Item>
                <MovimientoItem 
                    key={movimiento.id}
                    nombre = {movimiento.nombre}
                    cantidad = {movimiento.cantidad}
                    tipoMovimiento = {movimiento.tipo_movimiento} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovimientosList;
