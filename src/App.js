import React from "react";
import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import {
  FaSun,
  FaMoon,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
import Header from "./components/Header";
import SocialMedia from "./components/SocialMedia";
import Profile from "./components/Profile";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" size="md" color="cyan.500" fontWeight="semibold">
          Joesgabriel M
        </Heading>

        <Spacer />

        <IconButton
          ml="2"
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            window.open("https://www.linkedin.com/in/joes-gabriel-5246811bb")
          }
        />

        <IconButton
          ml="2"
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("htttps://www.github.com/joesgabriel")}
        />

        <IconButton
          ml="2"
          icon={<FaInstagram />}
          isRound="true"
          onClick={() => window.open("htttps://www.instagram.com/joesgabriel")}
        />

        <IconButton
          ml="8"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        />
      </Flex>

      <Header />
      <SocialMedia />
      <Profile />
    </VStack>
  );
};

export default App;
