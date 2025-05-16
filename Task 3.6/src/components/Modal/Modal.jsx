import styles from "./Modal.module.css";
import checkIcon3 from "/src/assets/Icons/Icon (2).png";


export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          <img
                      src={checkIcon3}
                      alt="icon"
                      style={{ width: "16px", height: "16px" }}
                    />
        </button>
        {children}
      </div>
    </div>
  );
}
export default Modal;