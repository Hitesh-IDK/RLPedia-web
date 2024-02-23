import Login from "./components/login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import GetStarted from "./pages/getStarted";
import TestPage from "./pages/testPage";
import ScientificThinking from "./pages/scientific-thinking";
import domain from "./components/Domain/domain-section"
import ComputerScience from "./pages/computer-science";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="start" element={<GetStarted />} />
        <Route path="test" element={<TestPage />} />
        <Route path="scientific" element={<ScientificThinking />} />
        <Route path="computerscience" element={<ComputerScience />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
