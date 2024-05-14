import { Route, Routes, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Main from "./pages/Main";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./index.css";

const GlobalStyle = createGlobalStyle`
${reset}
    *{
      background-color: #111;
      color: #fff;
    }
    body {
      box-sizing: border-box;
    }
    `;

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Routes location={location}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
