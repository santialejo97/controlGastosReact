import NewBudget from "./NewBudget";

// eslint-disable-next-line react/prop-types
const Header = ({ presupuesto, setPresupuesto }) => {
  return (
    <header>
      <h1>Planificar gastos</h1>
      <NewBudget presupuesto={presupuesto} setPresupuesto={setPresupuesto} />
    </header>
  );
};

export default Header;
