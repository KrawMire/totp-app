import './modal-window.css';


export default function ModalWindow(props) {
  const { children } = props;

  return (
    <div
      className={"modal-window-backdrop " + (props.show ? "" : "hidden")}
      onClick={props.onClose}
    >
      <div
        className="modal-window-container"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}