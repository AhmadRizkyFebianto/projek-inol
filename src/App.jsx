import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Flex } from "@radix-ui/themes";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Search from "./component/Search";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
