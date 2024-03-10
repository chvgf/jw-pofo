import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Main from "./pages/Main";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";

const GlobalStyle = createGlobalStyle`
${reset}
    *{
      background-color: #222;
      color: #fff;
      overflow: hidden; // 이따 삭제
    }
    body {
      box-sizing: border-box;
    }
    `;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
