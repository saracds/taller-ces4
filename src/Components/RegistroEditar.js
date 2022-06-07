import React, { useState, useEffect } from 'react';

import { Form, Button, Row, Col, Card, InputGroup, FormControl } from 'react-bootstrap';
import ModalMessage from "../components/ModalMessage";
import 'bootstrap/dist/css/bootstrap.min.css';

import { v4 as uuidv4 } from "uuid";

const RegistroEditar = ({ initialState,  movimiento,  editar, setMovimiento, setMovimientos, movimientos, setEditar, final, CalculoFinal, inicial }) => {

  const { tipo_movimiento, nombre, cantidad } = movimiento;

  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({ title: "", body: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCancelar = () => setMovimiento(initialState);

  useEffect(() => {

    if (editar) {
      setMovimiento(editar);
    } else {
      setMovimiento(initialState);
    }
  }, [editar, setMovimiento]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() == false) {
      event.stopPropagation();
    } else {
      handleAgregarMovimiento();
    }
    setValidated(true)
  };

  const handleMovimiento = (name, value) => {
    setMovimiento({ ...movimiento, [name]: value });
  };

  const handleAgregarMovimiento = () => {

    if (editar) {
      console.log(`anterior : ${editar.cantidad} nuevo : ${movimiento.cantidad}`)
      let diferencia = parseInt(movimiento.cantidad) - parseInt(editar.cantidad);
      Editar(editar.id, movimiento.tipo_movimiento, movimiento.nombre, movimiento.cantidad);
      CalculoFinal(movimiento.tipo_movimiento, diferencia);
      setEditar(null);
    }else{
      if(inicial !== 0){
        if ((movimiento.tipo_movimiento === "Gasto") && ((parseFloat(final.replace("$", "").replace(".", "")) - parseFloat(movimiento.cantidad)) < 0)) {
          setMessage({ title: "ERROR", body: "No cuenta con saldo suficiente para realizar este movimiento" })
          handleShow();
        } else {
          setMovimientos([...movimientos, { ...movimiento, id: uuidv4() }]);
          CalculoFinal();
          setMessage({ title: "Registro Exitoso", body:`El ${movimiento.tipo_movimiento} fue agregado con éxito` })
          handleShow();
        }
      }else{
        setMessage({ title: "ERROR", body: 'El saldo incial no puede ser 0' });
        handleShow();
      }
    }
    handleCancelar();
  };

  const Editar = (id, tipo_movimiento, nombre, cantidad) => {
    const nuevoMovimiento = movimientos.map((movimiento) => movimiento.id === id ? { id, tipo_movimiento, nombre, cantidad } : movimiento);
    setMovimientos(nuevoMovimiento);
  };


  return (
    <Card className='text-center'>
      <Card.Body>
        <Card.Title>{editar ? "Editar Registro" : "Registro"}</Card.Title>
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
                    value={tipo_movimiento}
                    onChange={e => handleMovimiento("tipo_movimiento", e.target.value)}
                    required
                  >
                    <option value="" selected></option>
                    {editar?.tipo_movimiento == "Ingreso"
                      && <option value="Ingreso" selected>Ingreso</option>
                      || <option value="Ingreso">Ingreso</option>}
                    {editar?.tipo_movimiento == "Gasto"
                      && <option value="Gasto" selected>Gasto</option>
                      || <option value="Gasto">Gasto</option>}
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
                    min = "1"
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
                  <Button variant="primary" type="submit">{editar ? "Editar Movimiento" : "Agregar Movimiento"}</Button>
                </Col>
              </Row>
            </div>
          </Form>
        </Card.Text>
      </Card.Body>
      <ModalMessage show={show} handleClose={handleClose} title={message.title} body={message.body} />
    </Card>
  );
};

export default RegistroEditar;
