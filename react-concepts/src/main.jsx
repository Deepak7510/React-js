import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GlobalContextState from "./components/context-api/GlobalContextState.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalContextState>
    <App />
  </GlobalContextState>
);
