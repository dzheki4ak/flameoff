import Modal from 'react-modal';
// import SuccessForm from './components/SuccessForm/SuccessForm';
import QuoteForm from './components/QuoteForm/QuoteForm';
import CloseCross from '@/public/images/icons/close_cross.svg';
import Image from 'next/image';
import './QuoteModal.scss';

Modal.setAppElement('body');

const CustomModal = ({ modalIsOpen, closeModal }) => {
  const customModalStyles = {
    content: {
      inset: '10px',
      maxWidth: '680px',
      height: 'fit-content',
      padding: '48px',
      margin: 'auto',
      borderRadius: '3px',
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Get a free quote"
      style={customModalStyles}
    >
      <Image
        className="modal__close_button"
        onClick={closeModal}
        src={CloseCross}
        alt="close button"
      />
      {/* <SuccessForm closeFn={closeModal}/> */}
      <QuoteForm />
    </Modal>
  );
};

export default CustomModal;
