import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KprPage from "./pages/KprPages.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/kpr" element={<KprPage />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  </StrictMode>
);
