import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import reset from "styled-reset";
import About from "./pages/About";
import Projects from "./pages/Projects";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
    box-sizing: border-box;
    font-size: 16px;
    color: #1C1B1F;
    background-color: #fff;
    overflow: hidden;
  }`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
