import "./Modal.scss";

const Modal = ({ handleClose, show, children }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";

	return (
		<div className={showHideClassName} >
			<section className="modal-main">
				{children}
				<button type="button" onClick={handleClose} className="btn_close">
					Закрыть окно
				</button>
			</section>
		</div>
	);
};

export default Modal;
