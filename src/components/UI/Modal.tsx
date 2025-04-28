import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  buttonContent: ReactNode;
}

const Modal = ({ isOpen, onClose, children, buttonContent }: ModalProps) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black bg-opacity-50 p-2"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[500px] md:max-w-[800px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-lg p-4 md:px-6 custom-scrollbar"
        style={{
          backgroundImage: "url('/images/modal-bg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
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
