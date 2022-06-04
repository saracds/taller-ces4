import React,{useState} from "react";

import { Badge, Card, ListGroup, Row, Col } from "react-bootstrap";

import Busqueda from "./Busqueda";
import MovimientoItem from "./MovimientoItem";

const MovimientosList = ({ movimientos, setMovimientos, CalculoFinal, formatNumber, setEditar, editar, setMovimiento, final}) => {

  const [buscar, setBuscar] = useState("")
  const [coincidencias, setCoincidencias] = useState([]);

  const handleDelete = (id) => {
    setMovimientos(movimientos.filter((movimiento) => movimiento.id !== id));
    CalculoFinal();
  };

  const data = (!buscar) ? movimientos : coincidencias;

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
          <Busqueda 
            movimientos={movimientos} 
            buscar={buscar}
            setBuscar={setBuscar}
            coincidencias={coincidencias}
            setCoincidencias={setCoincidencias}
            />
          <ListGroup as="ul">
            {data.map((movimiento) => (
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
