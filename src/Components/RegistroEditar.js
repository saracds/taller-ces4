import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const RegistroEditar = () => {

  return (
    <Card className='col-5 text-center'>
      <Card.Body>
        <Card.Title>Registro</Card.Title>
        <hr/>
        <Card.Text>
        <Form className='text-center'>
        <Form.Group className='col'>
          <Row>
            <Col md = "4">
              <Form.Label>Tipo Movimiento</Form.Label>
            </Col>
            <Col md = '8'>
              <Form.Select>
                <option>Seleccione una opcion</option>
                <option value="1">Ingreso</option>
                <option value="2">Gato</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <br/>
        <Form.Group className='col'>
          <Row>
             <Col md = "4">
              <Form.Label>Tipo Movimiento</Form.Label>
            </Col>
            <Col md = '8'>
              <Form.Control type='text' placeholder='Nombre'/>
            </Col>
          </Row>
        </Form.Group>
        <br/>
        <Form.Group className='col'>
          <Row>
            <Col md = '4'>
              <Form.Label>Cantidad</Form.Label>
            </Col>
            <Col md = '8'>
              <Form.Control type='number' placeholder='Costo'/>
            </Col>
          </Row>
        </Form.Group>

        <br/>
        <hr/>
        <br/>

        <div className='text-center jsutify-content-around'>
          <Row>
            <Col md = "6">
              <Button variant="primary"  type="submit">Cancelar</Button>
            </Col>
            <Col md = "6">
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
