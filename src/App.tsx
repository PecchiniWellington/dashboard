import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import DashboardContextProvider from "./context/dashboardContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <DashboardContextProvider>
          <DashboardLayout />
        </DashboardContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
