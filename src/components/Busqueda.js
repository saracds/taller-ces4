import React from 'react'

import { InputGroup, Form, FormControl, Row, Col } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";

const Busqueda = () => {
    return (

            <Row>
                <Col>
                    <InputGroup className="mb-3 Search-input" size='sm'>
                        <InputGroup.Text id="buscar"><BsSearch /></InputGroup.Text>
                        <FormControl
                            placeholder="Buscar ..."
                            aria-label="Buscar"
                            aria-describedby="buscar"
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
                        />
                        <Form.Check
                            inline
                            label="Ingreso"
                            name="group1"
                            type="radio"
                            id="Ingreso"
                        />
                        <Form.Check
                            inline
                            label="Gasto"
                            name="group1"
                            type="radio"
                            id="Gasto"
                        />
                    </div>
                </Col>
            </Row>

    )
}

export default Busqueda