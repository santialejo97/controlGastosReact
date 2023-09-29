import { useState } from "react";
import Mensaje from "./Mensaje";

// eslint-disable-next-line react/prop-types
const NewBudget = ({ presupuesto, setPresupuesto, setIsValid }) => {
  const [mensaje, setMensaje] = useState("");
  const handlerBudget = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setMensaje("NO es un presupuesto valido");
      return;
    }
    setMensaje("");
    setIsValid(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlerBudget}>
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value={"Añadir"} />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NewBudget;
