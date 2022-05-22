import React from 'react'

import { Modal, Button} from 'react-bootstrap';


const ModalMessage = ({show, handleClose}) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Guardar/Eliminar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMessage