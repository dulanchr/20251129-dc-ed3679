import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, BaseStyles } from "@primer/react";
import AppHeader from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <BrowserRouter>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
