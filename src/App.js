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

  const CalculoFinal = () => {
    console.log(movimiento);
    let IngresosTotal = movimientos.filter((movimiento) => movimiento.tipo_movimiento === "Ingreso")
      .reduce((IngresoTotalAc, mov) => IngresoTotalAc += parseInt(mov.cantidad), 0);

    let GastosTotal = movimientos.filter((movimiento) => movimiento.tipo_movimiento === "Gasto")
      .reduce((GastoTotalAc, mov) => GastoTotalAc += parseInt(mov.cantidad), 0);

    let totalFinal = (parseInt(inicial) + (parseInt(IngresosTotal) - parseInt(GastosTotal)));

    totalFinal = (parseInt(inicial) + (parseInt(IngresosTotal) - parseInt(GastosTotal)));

    setFinal(formatNumber(totalFinal));

  };

  const handleCancelar = () => setMovimiento(initialState);

  const handleAgregarMovimiento = () => {
    if (movimiento.tipo_movimiento === "Gasto" && final <= 0) {
      setMessage({ title: "ERROR", body: "No cuenta con saldo suficiente para realizar este movimiento" })
      handleShow();
    } else {
      setMovimientos([...movimientos, { ...movimiento, id: uuidv4() }]);
      CalculoFinal();
    }
  };

  const formatNumber = function (number) {
    return new Intl.NumberFormat('ES-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(number);
  };

  const handleSaldoIncial = ({ target: { value } }) => setInicial(value);

  return (
    <div className="m-5">
      <div>
        <Header
          inicial={inicial}
          handleSaldoIncial={handleSaldoIncial}
          final={final}
          movimientos={movimientos}
          formatNumber={formatNumber}
        />
      </div>
      <br />
      <hr />
      <br />
      <Row>
        <Col lg="5">
          <RegistroEditar
            title="Registro"
            buttonName="Agregar Movimiento"
            movimiento={movimiento}
            handleMovimiento={handleMovimiento}
            handleAgregarMovimiento={handleAgregarMovimiento}
            handleCancelar={handleCancelar}
            handleCalculoFinal={CalculoFinal}
          />
        </Col>
        <Col lg="7">
          <MovimientosList
            movimientos={movimientos}
            setMovimientos={setMovimientos}
            movimiento={movimiento}
            handleMovimiento={handleMovimiento}
            handleAgregarMovimiento={handleAgregarMovimiento}
            handleCancelar={handleCancelar}
            handleCalculoFinal={CalculoFinal}
            formatNumber={formatNumber}
          />
        </Col>
      </Row>
      <ModalMessage show={show} handleClose={handleClose} title={message.title} body={message.body} />
    </div>
  );
}

export default App;
