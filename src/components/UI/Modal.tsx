import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  buttonContent: ReactNode;
}

const Modal = ({ isOpen, onClose, children, buttonContent }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}

      //   onClick={(e) => e.stopPropagation()}
      // Clicking outside should close modal
    >
      <div
        style={{
          backgroundImage: "url('/images/modal-bg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="bg-white w-full md:max-w-[700px] max-w-[350px] rounded-2xl md:px-6 p-4 shadow-lg relative h-[70vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="absolute top-5 right-4 text-gray-500 hover:text-black" onClick={onClose}>
          {buttonContent}
        </button>
        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
