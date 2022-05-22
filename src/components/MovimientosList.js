import React from 'react'

import { Container, Badge } from 'react-bootstrap';

import Busqueda from './Busqueda';
import MovimientoItem from './MovimientoItem';

const MovimientosList = () => {
    return (
        <Container className="justify-content-lg-center m-3" >
            <h1 className='MovimientosList-container__title'>Listado  Movimientos   <Badge bg="primary">9</Badge></h1>
            <Busqueda/>
            <div className='MovimientosList-container'>
                <ul>
                    <li>
                        <MovimientoItem />
                    </li>

                </ul>
            </div>
        </Container>
    )
}

export default MovimientosList