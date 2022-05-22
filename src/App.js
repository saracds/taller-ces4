import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Row, Col, InputGroup, FormControl} from 'react-bootstrap';

import MovimientosList from './components/MovimientosList';
import RegistroEditar from './components/RegistroEditar';


function App() {
  return (
    <div className='m-5'>
      <div>
        <Row className='mt-3'>
          <Col lg = "8">
            <h1>Egresos e Ingresos</h1>
          </Col>
          <Col lg = "2">
              <label>Saldo Inicial</label>
              <FormControl type='number' placeholder='1.250.000' size='sm'/>
          </Col>
          <Col lg = "2">
          <label>Saldo Final</label>
            <FormControl type='number' placeholder='1.250.000' size='sm' disabled/>
          </Col>
        </Row>
        
      </div>
      <br/>
      <hr/>
      <br/>
        <Row>
          <Col lg= "5">
            <RegistroEditar/>
          </Col>
          <Col lg = "7">
            <MovimientosList/>
          </Col>
        </Row>
      </div>
  );
}

export default App;
