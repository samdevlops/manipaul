import { RouterProvider } from "react-router-dom";
import "./App.css";
import allRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={allRoutes} />
    </div>
  );
}

export default App;
