import React from "react";  // ✅ Import React
import { createRoot } from "react-dom/client";
import "./../app.css"

import App from "./App.jsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App/>);
} else {
  console.error("Failed to find the root element");
}
