import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Flex } from "@radix-ui/themes";
import Navbar from "./component/navbar";
import Footer from "./component/Footer";
import Search from "./component/Search";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Flex justify="center" align="center" direction="column">
          <Search />
          <h1>Hello World</h1>
          <p>Khintil</p>
        </Flex>
      </div>
      <Footer />
    </>
  );
}

export default App;
