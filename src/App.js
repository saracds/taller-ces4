import React,{useState} from 'react'
import { Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import MovimientosList from './components/MovimientosList';
import ModalMessage from './components/ModalMessage';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div >
      <MovimientosList/>
      <ModalMessage show = {show}  handleClose={handleClose} />
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
    </div>
  );
}

export default App;
