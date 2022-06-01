import React from 'react'

import { Modal } from 'react-bootstrap';

import RegistroEditar from './RegistroEditar';

const ModalEdit = ({ show, handleClose, movimiento, handleMovimiento, handleAgregarMovimiento }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <RegistroEditar
                    title="Editar Movimiento"
                    buttonName= "Guardar Cambios"
                    movimiento={movimiento}
                    handleMovimiento={handleMovimiento}
                    handleAgregarMovimiento={handleAgregarMovimiento}
                    handleCancelar={handleClose}
                />
            </Modal.Body>
        </Modal>
    )
}

export default ModalEdit