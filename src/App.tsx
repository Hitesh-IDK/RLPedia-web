import Login from "./components/login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import GetStarted from "./pages/getStarted";
import TestPage from "./pages/testPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="start" element={<GetStarted />} />
        <Route path="test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
