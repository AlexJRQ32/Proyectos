import './Modal.css';

function Modal({isOpen, onClose, onSubmit, children}){
    if(!isOpen) return null;

    return(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal" onClick={onClose}>
                    <i className="fa-solid fa-times"></i>
                </button>
                <form onSubmit={onSubmit}>
                    {children}
                </form>
            </div>
        </div>
    );
};

export default Modal;