
import './App.css';
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MedicLoginPage from "./pages/MedicLoginPage";
import DispatchLoginPage from "./pages/DispatchLoginPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage/>}/>
          <Route path={"/medic-login"} element={<MedicLoginPage/>}/>
          <Route path={"/dispatch-login"} element={<DispatchLoginPage/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
