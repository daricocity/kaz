import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const IdleTimeOutModal = ({showModal, handleLogout, handleClose, remainingTime}) => {
    return(
        <Modal show={showModal} onHide={handleClose} className="modal-popup">
            <Modal.Header closeButton>
                <Modal.Title>You Have Been Idle!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You will Get Timed Out in the next {remainingTime/1000}min. You want to stay? Click on the 'Stay' Button
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleLogout}>Logout</Button>
                <Button variant="primary" onClick={handleClose}>Stay</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default IdleTimeOutModal
