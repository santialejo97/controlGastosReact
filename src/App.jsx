import { useState } from "react";
import Header from "./components/Header";
import iconoNewCost from "./assets/img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import { createId } from "./helpers/index";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animar, setAnimar] = useState(false);
  const [costs, setCosts] = useState([]);
  const handleNewCosto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimar(true);
    }, 500);
  };
  const saveCost = (cost) => {
    setCosts([...costs, cost]);
  };
  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      {isValid && (
        <div className="nuevo-gasto">
          <img src={iconoNewCost} alt="newCost" onClick={handleNewCosto} />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animar={animar}
          setAnimar={setAnimar}
          saveCost={saveCost}
        />
      )}
    </>
  );
}

export default App;
