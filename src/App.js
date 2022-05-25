import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MovimientosList from "./components/MovimientosList";
import RegistroEditar from "./components/RegistroEditar";
import Header from "./components/Header";
import ModalMessage from "./components/ModalMessage";

function App() {
  const initialState = { tipo_movimiento: "", nombre: "", cantidad: "" };
  let title;
  let body;

  const [movimiento, setMovimiento] = useState(initialState);
  const [movimientos, setMovimientos] = useState([]);

  const [inicial, setInicial] = useState(0);
  const [final, setFinal] = useState(0);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({ title: "", body: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMovimiento = (name, value) => {
    setMovimiento({ ...movimiento, [name]: value });
  };

  const handleCancelar = () => setMovimiento(initialState);

  const handleAgregarMovimiento = () => {
    if (movimiento.tipo_movimiento === "Gasto" && final <= 0) {
      setMessage({ title: "ERROR", body: "No cuenta con saldo suficiente para realizar este movimiento" })
      handleShow();
    } else {
      setMovimientos([...movimientos, { ...movimiento, id: uuidv4() }]);
    }
  };

  const handleSaldoIncial = ({ target: { value } }) => setInicial(value);

  return (
    <div className="m-5">
      <div>
        <Header
          inicial={inicial}
          handleSaldoIncial={handleSaldoIncial}
          final={final}
        />
      </div>
      <br />
      <hr />
      <br />
      <Row>
        <Col lg="5">
          <RegistroEditar
            movimiento={movimiento}
            handleMovimiento={handleMovimiento}
            handleAgregarMovimiento={handleAgregarMovimiento}
            handleCancelar={handleCancelar}
          />
        </Col>
        <Col lg="7">
          <MovimientosList
            movimientos={movimientos}
            setMovimientos={setMovimientos}
            handleClose={handleClose}
            handleShow = {handleShow}
            show = {show}
            movimiento={movimiento}
            handleMovimiento={handleMovimiento}
            handleAgregarMovimiento={handleAgregarMovimiento}
            handleCancelar={handleCancelar}
          />
        </Col>
      </Row>
      <ModalMessage show={show} handleClose={handleClose} title={message.title} body={message.body} />
    </div>
  );
}

export default App;
