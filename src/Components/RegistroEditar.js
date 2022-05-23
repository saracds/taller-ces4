import { Form, Button, Row, Col, Card, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const RegistroEditar = ({ movimiento, handleMovimiento }) => {

  const { tipo_movimiento, nombre, cantidad } = movimiento;

  return (
    <Card className='text-center'>
      <Card.Body>
        <Card.Title>Registro</Card.Title>
        <hr />
        <Card.Text>
          <Form className='text-center'>
            <Form.Group className='col'>
              <Row>
                <Col md="4">
                  <Form.Label>Tipo Movimiento</Form.Label>
                </Col>
                <Col md='8'>
                  <Form.Select name = "tipo_movimiento" onChange={e => handleMovimiento("tipo_movimiento", e.target.value)} >
                    <option>Seleccione una opción</option>
                    <option value="Ingreso">Ingreso</option>
                    <option value="Gasto">Gasto</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>
            <br />
            <Form.Group className='col'>
              <Row>
                <Col md="4">
                  <Form.Label>Nombre</Form.Label>
                </Col>
                <Col md='8'>
                  <InputGroup className="mb-3">
                    <FormControl type='text' placeholder='Nombre' name="nombre" value={nombre} onChange={e => handleMovimiento("nombre", e.target.value)} />
                  </InputGroup>
                </Col>
              </Row>
            </Form.Group>
            <br />
            <Form.Group className='col'>
              <Row>
                <Col md='4'>
                  <Form.Label>Cantidad</Form.Label>
                </Col>
                <Col md='8'>
                  <Form.Control type='number' placeholder='Costo' name="cantidad" value={cantidad} onChange={e => handleMovimiento("cantidad", e.target.value)} />
                </Col>
              </Row>
            </Form.Group>

            <br />
            <hr />
            <br />

            <div className='text-center jsutify-content-around'>
              <Row>
                <Col md="6">
                  <Button variant="primary" type="submit">Cancelar</Button>
                </Col>
                <Col md="6">
                  <Button variant="primary" type="submit">Agregar Movimiento</Button>
                </Col>
              </Row>
            </div>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RegistroEditar;
