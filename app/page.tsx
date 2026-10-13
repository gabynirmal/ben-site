"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Viewport3D = dynamic(() => import("../components/ui/Viewport3D"), {
  ssr: false,
});

export default function Home() {
  const [isExploring, setIsExploring] = useState(false);

  useEffect(() => {
    // Sync state with browser pointer lock
    const handlePointerLockChange = () => {
      if (document.pointerLockElement) {
        setIsExploring(true);
      } else {
        setIsExploring(false);
      }
    };

    // Handle key presses (hiding on movement, bringing back on ESC)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsExploring(false);
        return;
      }

      const movementCodes = [
        "KeyW",
        "KeyA",
        "KeyS",
        "KeyD",
        "Space",
        "ShiftLeft",
        "ShiftRight",
      ];
      const movementKeys = ["w", "a", "s", "d", "W", "A", "S", "D", " "];

      if (movementCodes.includes(e.code) || movementKeys.includes(e.key)) {
        setIsExploring(true);
      }
    };

    document.addEventListener("pointerlockchange", handlePointerLockChange);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "pointerlockchange",
        handlePointerLockChange,
      );
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
        {/* Pass through clicks on the canvas container so overlay links work */}
        <Box
          position="absolute"
          inset="0"
          zIndex={0}
          id="bs-canvas-trigger"
          pointerEvents="none"
        >
          <Box pointerEvents="auto" h="100%" w="100%">
            <Viewport3D />
          </Box>
        </Box>

        {/* Hero Text & Links Container — Fades out when exploring */}
        <Flex
          position="absolute"
          direction="column"
          gap="6px"
          bottom={{ base: "40px", md: "30px" }}
          left={{ base: "4", md: "30px" }}
          zIndex={20}
          maxW={{ base: "85%", md: "420px" }}
          w="fit-content"
          pointerEvents={isExploring ? "none" : "auto"}
          opacity={isExploring ? 0 : 1}
          visibility={isExploring ? "hidden" : "visible"}
          transition="opacity 0.3s ease, visibility 0.3s ease"
          p="4"
          borderRadius="2xl"
          bg="rgba(200, 200, 200, 0.2)"
          backdropFilter="blur(6px)"
        >
          <Text fontSize="lg" letterSpacing="widest" fontWeight="600">
            FEATURED PROJECT
          </Text>
          <Heading
            size="2xl"
            fontWeight="500"
            letterSpacing="wide"
            color="var(--emphasis)"
            lineHeight="short"
          >
            THE STACKS: BOSTON
            <br />
            CHINATOWN LIBRARY
          </Heading>
          <Flex gap={6} justifyContent="flex-start" mt={2}>
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
        </Flex>

        {/* Instructions footer — Always visible */}
        <Flex
          position="absolute"
          bottom="10px"
          w="100%"
          justifyContent="center"
          zIndex={20}
          display={{ base: "none", md: "flex" }}
          pointerEvents="none"
        >
          <Text mt={4} fontSize="sm" letterSpacing="wide" textAlign="center">
            CLICK CANVAS TO EXPLORE | WASD TO MOVE |
            <br />
            SPACE/SHIFT FOR UP/DOWN | ESC TO EXIT
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
