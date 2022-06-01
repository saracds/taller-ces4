import React from "react";

import { Badge, Card, ListGroup, Row, Col } from "react-bootstrap";

import Busqueda from "./Busqueda";
import MovimientoItem from "./MovimientoItem";

const MovimientosList = ({ movimientos, setMovimientos, handleCalculoFinal, formatNumber, setEditar, editar, setMovimiento, final}) => {


  const handleDelete = (id) => {
    setMovimientos(movimientos.filter((movimiento) => movimiento.id !== id));
    handleCalculoFinal();
  };

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
              <ListGroup.Item key={movimiento.id}>
                <MovimientoItem
                  movimiento={movimiento}
                  handleDelete={handleDelete}
                  formatNumber = {formatNumber}
                  setEditar = {setEditar}
                  editar = {editar}
                  setMovimiento = {setMovimiento}
                  setMovimientos = {setMovimientos}
                  movimientos={movimientos}
                  final = {final}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovimientosList;
