import React, { useState } from 'react';


import { Form, Button, Row, Col, Card, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const RegistroEditar = ({ title, movimiento, handleMovimiento, handleAgregarMovimiento, handleCancelar, buttonName }) => {

  const { tipo_movimiento, nombre, cantidad } = movimiento;

  const [validated, setValidated] = useState(false);
  const [invalid, setInvalid] = useState(false);
  

  const validarFormulario = () =>{
   if(tipo_movimiento.length == 0){
     return false;
   }
   if(nombre.length == 0){
     return false;
   }
   if(cantidad <= 0){
     setInvalid(true);
     return false;
   }else{
    setInvalid(false);
   }
 
   return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("validacion",validarFormulario());
    const form = event.currentTarget;
    console.log(form);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }else{
      handleAgregarMovimiento();
    }
    setValidated(true)
  };

  return (
    <Card className='text-center'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <hr />
        <Card.Text>
          <Form className='text-center' noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className='col' controlId="validationTipoMovimiento">
              <Row>
                <Col md="4">
                  <Form.Label>Tipo Movimiento</Form.Label>
                </Col>
                <Col md='8'>
                  <Form.Select
                    name="tipo_movimiento"
                    onChange={e => handleMovimiento("tipo_movimiento", e.target.value)}
                    required
                  >
                    <option></option>
                    <option value="Ingreso">Ingreso</option>
                    <option value="Gasto">Gasto</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Seleccione el tipo
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>
            <br />
            <Form.Group className='col' controlId="validationNombre">
              <Row>
                <Col md="4">
                  <Form.Label>Nombre</Form.Label>
                </Col>
                <Col md='8'>
                  <InputGroup className="mb-3">
                    <FormControl
                      type='text'
                      placeholder='Nombre'
                      name="nombre"
                      value={nombre}
                      onChange={e => handleMovimiento("nombre", e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese el nombre
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Row>
            </Form.Group>
            <br />
            <Form.Group className='col' controlId="validationCantidad">
              <Row>
                <Col md='4'>
                  <Form.Label>Cantidad</Form.Label>
                </Col>
                <Col md='8'>
                  <Form.Control
                    type='number'
                    placeholder='Costo'
                    name="cantidad"
                    value={cantidad}
                    onChange={e => handleMovimiento("cantidad", e.target.value)}
                    required

                  />
                  <Form.Control.Feedback type="invalid">
                   La cantidad debe ser mayor a cero
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>

            <br />
            <hr />
            <br />

            <div className='text-center jsutify-content-around'>
              <Row>
                <Col md="6">
                  <Button variant="primary" type="button" onClick={handleCancelar}>Cancelar</Button>
                </Col>
                <Col md="6">
                  <Button variant="primary" type="submit">{buttonName}</Button>
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
