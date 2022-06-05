import React, { useState } from "react";
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

  const CalculoFinal = (tipo_movimiento, cantidad) => {
    let IngresosTotal = 0;
    let GastosTotal = 0;
    let totalFinal = 0;
    console.log(tipo_movimiento, cantidad)
    if (tipo_movimiento === "Eliminar") {
      totalFinal = parseInt(final.replace("$", "").replace(".", "")) - parseInt(cantidad);
    } else {
      if (tipo_movimiento === "Ingreso") {
        IngresosTotal += parseInt(cantidad);
      } else {
        if (tipo_movimiento === "Gasto") {
          GastosTotal += parseInt(cantidad);
        }
      }
      totalFinal = parseInt(final.replace("$", "").replace(".", "")) + parseInt(IngresosTotal) - parseInt(GastosTotal);
    }

    console.log(`Total: ${totalFinal} Ingreso: ${IngresosTotal} Gastos: ${GastosTotal}`)
    setFinal(formatNumber(totalFinal));

  };

  const formatNumber = function (number) {
    return new Intl.NumberFormat('ES-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(number);
  };

  const handleSaldoIncial = ({ target: { value } }) => {
    setInicial(value);
    setFinal(formatNumber(value));
  };


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
            movimiento={movimiento}
            editar={editar}
            setEditar={setEditar}
            final={final}
            setMovimiento={setMovimiento}
            setMovimientos={setMovimientos}
            movimientos={movimientos}
            CalculoFinal={CalculoFinal}
            initialState={initialState}
            inicial={inicial}
          />
        </Col>
        <Col lg="7">
          <MovimientosList
            movimientos={movimientos}
            setMovimientos={setMovimientos}
            movimiento={movimiento}
            CalculoFinal={CalculoFinal}
            formatNumber={formatNumber}
            setEditar={setEditar}
            final={final}
            setMovimiento={setMovimiento}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
