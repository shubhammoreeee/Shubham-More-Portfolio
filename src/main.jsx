import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/anton/latin-400.css";
import "@fontsource/im-fell-english/latin-400.css";
import "@fontsource/im-fell-english/latin-400-italic.css";
import "@fontsource/unifrakturcook/latin-700.css";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
