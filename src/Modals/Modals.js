// Libraries
import ReactDom from "react-dom";

// Styles
import "./Modal.styles.css";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="OVERLAY_STYLES" />
      <div className="MODAL_STYLES flex flex-col">
        {children}
        <button onClick={onClose} className="bg-red text-white rounded">
          Close Modal
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
