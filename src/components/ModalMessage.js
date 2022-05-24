import React from 'react'

import { Modal, Button} from 'react-bootstrap';


const ModalMessage = ({show, handleClose, title, body}) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Aceptar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMessage