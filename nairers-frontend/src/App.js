
import './App.css';
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MedicLoginPage from "./pages/medicPage/MedicLoginPage";
import DispatchLoginPage from "./pages/dispatchPage/DispatchLoginPage";
import TestPage from "./pages/TestPage";
import DispatchHomePage from "./pages/dispatchPage/DispatchHomePage";
import MedicSignUpPage from "./pages/medicPage/MedicSignUpPage";

function App() {
  return (
      <>
          <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<DispatchHomePage/>}/>
              <Route path={"/welcome"} element={<HomePage/>}/>
              <Route path={"/join-us"} element={<MedicSignUpPage/>}/>
              <Route path={"/medic-login"} element={<MedicLoginPage/>}/>
              <Route path={"/dispatch-login"} element={<DispatchLoginPage/>}/>
              <Route path={"/test"} element={<TestPage/>}/>
          </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
