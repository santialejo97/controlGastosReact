import closeModal from "../assets/img/cerrar.svg";
// eslint-disable-next-line react/prop-types
const Modal = ({ setModal, animar, setAnimar }) => {
  const disguiseModal = () => {
    setAnimar(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={closeModal} alt="closeModal" onClick={disguiseModal} />
      </div>
      <form className={`formulario ${animar ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  );
};

export default Modal;
