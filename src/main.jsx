import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import InstructionModal from "./components/InstructionModal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InstructionModal />
    <App />
  </React.StrictMode>
);
