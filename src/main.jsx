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
import Beli from "./pages/Beli.jsx";
import {
  HalamanLKS,
  Halamansk,
  HalamanDetail,
  HalamanKSB,
  HalamanVerif,
} from "./pages/HalamanUtama";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <LoadingProvider>
        <BrowserRouter>
          <GlobalLoader />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/LupaKataSandi" element={<HalamanLKS />} />
            <Route path="/syaratdanketentuan" element={<Halamansk />} />
            <Route path="/kpr" element={<KprPage />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/belirumah" element={<Beli />} />
            <Route path="/detailrumah/:refid" element={<HalamanDetail />} />
          </Routes>
        </BrowserRouter>
      </LoadingProvider>
    </Theme>
  </StrictMode>
);
