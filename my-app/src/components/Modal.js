import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/90 shadow-md rounded-md p-4"
      ref={dialog}
    >
      {children}
      <form method="dialog">
        <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
