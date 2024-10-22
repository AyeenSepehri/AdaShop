import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    title: string;
    width: number; // Width in pixels
    children: React.ReactNode; // Content to be passed as children
    onClose: () => void; // Function to close the modal
    isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ title, width, children, onClose , isOpen }) => {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return null;

    if (!isOpen) return null;

    // Close modal when clicking on the backdrop
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-lg shadow-lg p-5" style={{ width: `${width}px` }}>
                <div className="flex justify-between items-center border-b border-gray-400 pb-2">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        X {/* Close button */}
                    </button>
                </div>
                <div className="mt-4">
                    {children} {/* Content passed from outside */}
                </div>
            </div>
        </div>,
        modalRoot // Portal target
    );
};

export default Modal;
