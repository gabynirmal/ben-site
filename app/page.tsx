"use client";

import dynamic from "next/dynamic";
import { Box, Flex, Heading, Icon, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import ContactLinks from "./about/ContactLinks";
import { categoryLinks } from "./data/featured";

const Viewport3D = dynamic(() => import("../components/ui/Viewport3D"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* Hero — 3D library model */}
      <Flex
        id="bs-home-hero"
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100vh"
        direction="column"
      >
        <Box position="absolute" inset="0" zIndex={0} id="bs-canvas-trigger">
          <Viewport3D />
        </Box>

        <Box
          position="absolute"
          bottom={{ base: "40px", md: "30px" }}
          left={{ base: "4", md: "30px" }}
          zIndex={20}
          maxW={{ base: "85%", md: "420px" }}
          pointerEvents="auto"
        >
          <Text
            fontSize="xs"
            letterSpacing="widest"
            color="var(--emphasis-opp)"
            fontWeight="600"
            mb={2}
          >
            FEATURED PROJECT
          </Text>
          <Heading
            size={{ base: "lg", md: "2xl" }}
            fontWeight="500"
            letterSpacing="wide"
            color="var(--foreground)"
            mb={3}
            lineHeight="short"
          >
            THE STACKS: BOSTON CHINATOWN LIBRARY
          </Heading>
          <Flex gap={6} flexWrap="wrap">
            <Link href="/architecture/chinatown-library">
              <Text
                fontSize="sm"
                letterSpacing="wide"
                color="var(--foreground)"
                borderBottom="1px solid"
                pb="2px"
                _hover={{
                  color: "var(--link-hover)",
                  borderColor: "var(--link-hover)",
                }}
                transition="color 0.2s ease, border-color 0.2s ease"
              >
                VIEW PROJECT
              </Text>
            </Link>
            <Link href="/architecture">
              <Text
                fontSize="sm"
                letterSpacing="wide"
                color="var(--foreground)"
                borderBottom="1px solid"
                pb="2px"
                _hover={{
                  color: "var(--link-hover)",
                  borderColor: "var(--link-hover)",
                }}
                transition="color 0.2s ease, border-color 0.2s ease"
              >
                ALL ARCHITECTURE
              </Text>
            </Link>
          </Flex>
          <Text
            mt={4}
            fontSize="xs"
            color="var(--link-hover)"
            letterSpacing="wide"
          >
            Click canvas to explore · WASD to move · Space/Shift for up/down ·
            Esc to exit
          </Text>
        </Box>

        <Flex
          position="absolute"
          bottom="10px"
          w="100%"
          justifyContent="center"
          zIndex={20}
        ></Flex>
      </Flex>
    </>
  );
}
