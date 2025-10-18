import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  const routerElement = useRoutes(routes);
  return <div>{routerElement}</div>;
}

export default App;
