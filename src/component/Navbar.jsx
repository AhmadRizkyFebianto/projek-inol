import { Box, Flex,TabNav, Text } from "@radix-ui/themes";
import Logo from "../assets/logo.png";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="shadow">
      <Flex justify="between" align="center" px="29px" py="10px">
        <img src={Logo} width="50" height="40" />
        <Flex align="center" gap="5">
          <Link href="#" underline="none" color="gray" highContrast>
            Chatbot
          </Link>
          <Link to="/kpr" className="text-gray-600 hover:text-black">
            Beli Rumah
          </Link>
          <Link href="#" underline="none" color="gray" highContrast>
            Hitung KPR
          </Link>
          <Link href="#" underline="none" color="gray" highContrast>
            Masuk
          </Link>
          <div className="bg-black w-[1.5px] h-7" />
          <Link href="#" underline="none" color="gray" highContrast>
            Daftar
          </Link>
        </Flex>
      </Flex>
    </nav>
  );
}
