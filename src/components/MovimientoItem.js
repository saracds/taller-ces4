import React from 'react'

import { BsPencil, BsXLg } from "react-icons/bs";

import { Badge } from 'react-bootstrap';


const MovimientoItem = () => {
    return (
        <div className='MovimientoItem-container'>
            <BsXLg className='MovimientoItem-icon'/>
            <BsPencil className='MovimientoItem-icon'/>
            Salario Freelance
            <Badge bg="success">7,000,000</Badge>
        </div>
    )
}

export default MovimientoItem