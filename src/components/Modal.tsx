import ReactModal from "react-modal";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  modalLabel: string;
}

ReactModal.setAppElement("#modal-root");

const Modal = ({ children, isOpen, onClose, modalLabel }: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={modalLabel}
      className="modal"
      overlayClassName="modal-overlay"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
