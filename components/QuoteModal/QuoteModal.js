import Modal from 'react-modal';

import './QuoteModal.scss'

Modal.setAppElement('body');

const CustomModal = ({ modalIsOpen, closeModal }) => {

  const customModalStyles = {

    content: {
      inset: '10px',
      maxWidth: '680px',
      padding: '48px',
      margin: 'auto',
      borderRadius: '3px',
    }
    
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Get a free quote"
      style={customModalStyles}
    ></Modal>
  );
};

export default CustomModal;
