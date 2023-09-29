import NewBudget from "./NewBudget";
import ControlBudget from "./controlBudget";

// eslint-disable-next-line react/prop-types
const Header = ({ presupuesto, setPresupuesto, isValid, setIsValid }) => {
  return (
    <header>
      <h1>Planificar gastos</h1>
      {isValid ? (
        <ControlBudget presupuesto={presupuesto} />
      ) : (
        <NewBudget
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValid={setIsValid}
        />
      )}
    </header>
  );
};

export default Header;
