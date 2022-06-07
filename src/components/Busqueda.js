import React, { useState } from 'react'

import { InputGroup, Form, FormControl, Row, Col } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";

const Busqueda = ({ movimientos, buscar, setBuscar, setCoincidencias, filtro, setFiltro }) => {

    const handleFiltro = (tipo) => setFiltro(tipo);

    const BuscarCoincidencia = ({ target: { value } }) => {
        setBuscar(value);
        let movimientosCopy;
        if (filtro === "Todos" || filtro === "") {
            movimientosCopy = movimientos.filter((movimiento) => movimiento.nombre.toLowerCase().includes(value.toLowerCase()))
        } else if (filtro === "Ingreso") {
            movimientosCopy = movimientos.filter((movimiento) => movimiento.nombre.toLowerCase().includes(value.toLowerCase()) && movimiento.tipo_movimiento == "Ingreso")
        } else {
            movimientosCopy = movimientos.filter((movimiento) => movimiento.nombre.toLowerCase().includes(value.toLowerCase()) && movimiento.tipo_movimiento == "Gasto")
        }
        setCoincidencias(movimientosCopy);
    }

    return (

        <Row className='text-left justify-content-md-left'>
            <Col>
                <InputGroup className="mb-3 Search-input ml-0" size='sm'>
                    <InputGroup.Text id="buscar"><BsSearch /></InputGroup.Text>
                    <FormControl
                        placeholder="Buscar ..."
                        aria-label="Buscar"
                        aria-describedby="buscar"
                        name={buscar}
                        onChange={BuscarCoincidencia}
                    />
                </InputGroup>
            </Col>
            <Col>
                <div className='Search-checks'>
                    <Form.Check
                        inline
                        label="Todos"
                        name="group1"
                        type="radio"
                        id="Todos"
                        onClick={() => handleFiltro("Todos")}
                    />
                    <Form.Check
                        inline
                        label="Ingreso"
                        name="group1"
                        type="radio"
                        id="Ingreso"
                        onClick={() => handleFiltro("Ingreso")}
                    />
                    <Form.Check
                        inline
                        label="Gasto"
                        name="group1"
                        type="radio"
                        id="Gasto"
                        onClick={() => handleFiltro("Gasto")}
                    />
                </div>
            </Col>
        </Row>

    )
}

export default Busqueda;