// Libraries
import ReactDom from "react-dom";

// React icons
import { AiOutlineCloseCircle } from "react-icons/ai";

// Styles
import "./Modal.styles.css";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="OVERLAY_STYLES" />
      <div className="MODAL_STYLES flex flex-col justify-between items-center rounded-lg">
        {children}

        <AiOutlineCloseCircle
          onClick={onClose}
          className="place-self-end cursor-pointer text-red text-3xl hover:opacity-75"
        ></AiOutlineCloseCircle>
      </div>
    </>,
    document.getElementById("portal")
  );
}
