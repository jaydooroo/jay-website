import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/global.css";

// Create theme instance
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#64b5f6",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#64b5f6",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </MUIThemeProvider>
    </ThemeProvider>
  );
}

export default App;
