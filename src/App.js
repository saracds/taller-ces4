import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';

import MovimientosList from './components/MovimientosList';
import RegistroEditar from './components/RegistroEditar';


function App() {

  const [movimiento, setMovimiento] = useState({ tipo_movimiento: "", nombre: "", cantidad: "" });
  const [movimientos, setMovimientos] = useState([]);

  const [inicial, setInicial] = useState(0);
  const [final, setFinal] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMovimiento = (name, value) => {
    setMovimiento({ ...movimiento, [name]: value });
    console.log(name, value)
  };

  const handleSaldoIncial = ({ target: { value } }) => setInicial(value);

  return (
    <div className='m-5'>
      <div>
        <Row className='mt-3'>
          <Col lg="8">
            <h1>Egresos e Ingresos</h1>
          </Col>
          <Col lg="2">
            <label>Saldo Inicial</label>
            <FormControl type='number' size='sm' value={inicial} onChange={handleSaldoIncial} />
          </Col>
          <Col lg="2">
            <label>Saldo Final</label>
            <FormControl type='number' value={final} size='sm' disabled />
          </Col>
        </Row>

      </div>
      <br />
      <hr />
      <br />
      <Row>
        <Col lg="5">
          <RegistroEditar movimiento={movimiento} handleMovimiento={handleMovimiento} />
        </Col>
        <Col lg="7">
          <MovimientosList />
        </Col>
      </Row>
    </div>
  );
}

export default App;
