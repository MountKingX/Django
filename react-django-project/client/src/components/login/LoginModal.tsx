import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import LoginForm from './LoginForm';

type LoginModalProps = {
  show: boolean;
  onClose: () => any;
};

export const LoginModal = ({ show, onClose }: LoginModalProps) => {
  if (show) {
    return (
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Please Login Here</Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-3">
          <LoginForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={onClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return null;
};
