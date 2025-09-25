import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { LoadingProvider } from "./Context/Loader";
import GlobalLoader from "./Context/GlobalLoader";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KprPage from "./pages/KprPages.jsx";
import ChatBot from "./pages/ChatBot.jsx";
import Profile from "./pages/Profile.jsx";
import HalamanLogin from "./Pages/HalamanLogin";
import HalamanRegister from "./Pages/HalamanRegister";
import HalamanLKS from "./Pages/HalamanLKS";
import HalamanKSB from "./Pages/HalamanKSB";
import HalamanVerif from "./Pages/HalamanVerifikasiKode";
import Halamansk from "./Pages/Halamansk";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <LoadingProvider>
        <BrowserRouter>
          <GlobalLoader />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/kpr" element={<KprPage />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </LoadingProvider>
    </Theme>
  </StrictMode>
);
