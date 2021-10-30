import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CapturarDatos from "./views/capturarDatos/CapturarDatos";
import MostrarInfo from "./views/mostrarInfo/MostrarInfo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CapturarDatos} />
        <Route path="/detallesInformacion" exact component={MostrarInfo} />
      </Switch>
    </Router>
  )
}

export default App