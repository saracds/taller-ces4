import React from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';

const Header = ({inicial, handleSaldoIncial, final}) => {

  return (
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
            <FormControl type='text' value={final} size='sm' disabled />
          </Col>
        </Row>
    </div>
  )
}

export default Header
