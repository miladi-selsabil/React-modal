import React from "react";
import "./Modal.css";

/**
 * Renders a modal component with the given properties.
 *
 * @param {boolean} isOpen - Indicates whether the modal is open or not.
 * @param {function} onClose - The function to be called when the modal is closed.
 * @param {ReactNode} children - The content to be displayed in the modal.
 * @return {ReactNode} The rendered modal component.
 */
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
