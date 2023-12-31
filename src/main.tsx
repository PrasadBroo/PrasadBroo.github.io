import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/main.css";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);
