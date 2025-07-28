import { StrictMode } from "react";
import ReactDom from "react-dom/client";

import "@/global.css";
import { App } from "./app";

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDom.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
