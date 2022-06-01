import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MovimientosList from "./components/MovimientosList";
import RegistroEditar from "./components/RegistroEditar";
import Header from "./components/Header";


function App() {
  const initialState = { tipo_movimiento: "", nombre: "", cantidad: "" };

  const [movimiento, setMovimiento] = useState(initialState);
  const [movimientos, setMovimientos] = useState([]);

  const [inicial, setInicial] = useState(0);

  const [final, setFinal] = useState(0);
 
  const [editar, setEditar] = useState(null);

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

  const formatNumber = function(number){
    return new Intl.NumberFormat('ES-CO', {style: 'currency',currency: 'COP', minimumFractionDigits: 2}).format(number);
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
            handleCancelar={handleCancelar}
            editar = {editar}
            setEditar = {setEditar}
            final = {final}
            setMovimiento = {setMovimiento}
            setMovimientos={setMovimientos}
            movimientos={movimientos}
          />
        </Col>
        <Col lg="7">
          <MovimientosList
            movimientos={movimientos}
            setMovimientos={setMovimientos}
            movimiento={movimiento}
            handleCancelar={handleCancelar}
            handleCalculoFinal = {CalculoFinal}
            formatNumber = {formatNumber}
            setEditar = {setEditar}
            editar = {editar}
            final = {final}
            setMovimiento = {setMovimiento}
          />
        </Col>
      </Row>
        </div>
  );
}

export default App;
