
import './App.css';
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestPage from "./pages/TestPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage/>}/>
          <Route path={"/test"} element={<TestPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
