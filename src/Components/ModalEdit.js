import React from 'react'

import { Modal } from 'react-bootstrap';

import RegistroEditar from './RegistroEditar';

const ModalEdit = ({ show, handleClose, movimiento, editar, setMovimiento, setMovimientos, movimientos, setEditar}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <RegistroEditar
                    title="Editar Movimiento"
                    buttonName= "Guardar Cambios"
                    movimiento={movimiento}
                    handleCancelar={handleClose}
                    editar={editar}
                    setMovimiento = {setMovimiento}
                    setMovimientos = {setMovimientos}
                    movimientos={movimientos}
                    setEditar = {setEditar}
                />
            </Modal.Body>
        </Modal>
    )
}

export default ModalEdit