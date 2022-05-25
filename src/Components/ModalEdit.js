import React from 'react'

import { Modal, Button } from 'react-bootstrap';

import RegistroEditar from './RegistroEditar';

const ModalEdit = ({ show, handleClose, movimiento, handleMovimiento, handleAgregarMovimiento }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <RegistroEditar
                    movimiento={movimiento}
                    handleMovimiento={handleMovimiento}
                    handleAgregarMovimiento={handleAgregarMovimiento}
                    handleCancelar={handleClose}
                />
            </Modal.Body>
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

export default ModalEdit