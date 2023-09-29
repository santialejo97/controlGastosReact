// eslint-disable-next-line react/prop-types
const ControlBudget = ({ presupuesto }) => {
  const formatterCurrency = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="contenedor-presupuesto sombra contenedor dos-columnas">
      <div>
        <p>grafica </p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          {" "}
          <span>Presupuesto : </span> {formatterCurrency(presupuesto)}
        </p>
        <p>
          {" "}
          <span>Disponible : </span> {formatterCurrency(0)}
        </p>
        <p>
          {" "}
          <span>Gastada : </span> {formatterCurrency(0)}
        </p>
      </div>
    </div>
  );
};

export default ControlBudget;
