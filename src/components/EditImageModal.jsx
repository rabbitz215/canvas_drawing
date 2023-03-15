import React from 'react'
import Modal from 'react-bootstrap/Modal';
import ImageCanvas from './ImageCanvas';

const EditImageModal = ({ show, handleClose, selectedImage, onSaveChanges }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ImageCanvas selectedImage={selectedImage} handleClose={handleClose} onSaveChanges={onSaveChanges} />
            </Modal.Body>
        </Modal>
    )
}

export default EditImageModal