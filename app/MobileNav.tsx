"use client";

import { Flex, Icon, Button, Heading, Box, Portal } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = ["Architecture", "Design", "Personal", "About"];
  return (
    <>
      <Portal>
        <Flex
          w="100vw"
          h="100vh"
          position="fixed"
          top="0"
          left="0"
          bgColor="rgba(29, 33, 40, 0.8)"
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap="6"
          backdropFilter="blur(5px)"
          zIndex="max"
          opacity={isMenuOpen ? 1 : 0}
          pointerEvents={isMenuOpen ? "auto" : "none"}
          transition="opacity 0.3s ease-in-out"
        >
          <Box position="absolute" top="17px" left="4">
            <Link href="/">
              <Heading
                size="3xl"
                color={
                  pathname === "/" ? "var(--emphasis)" : "var(--background)"
                }
                _hover={
                  pathname === "/"
                    ? { color: "var(--emphasis)" }
                    : { color: "var(--link-hover)" }
                }
                transition="color 0.2s ease-in-out"
              >
                Benjamin Smith
              </Heading>
            </Link>
          </Box>
          <Button
            alignItems="center"
            justifyContent="center"
            position="fixed"
            top="4"
            right="4"
            boxSize="40px"
            borderRadius="full"
            bgColor="transparent"
            color="var(--background)"
            _hover={{
              color: "var(--link-hover-opp)",
            }}
            _active={{
              color: "var(--link-hover-opp)",
            }}
            transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out opacity 0.3s ease-in-out"
            opacity={isMenuOpen ? 1 : 0}
            pointerEvents={isMenuOpen ? "auto" : "none"}
            onClick={() => setIsMenuOpen(false)}
          >
            <Icon boxSize="4rem">
              <IoIosClose />
            </Icon>
          </Button>
          {navigation.map((link: string) => (
            <Link
              href={`/${link.toLowerCase()}`}
              key={link}
              onClick={() => setIsMenuOpen(false)}
            >
              <Heading
                size="5xl"
                color={
                  pathname.includes(link.toLowerCase())
                    ? "var(--emphasis)"
                    : "var(--background)"
                }
                _hover={
                  pathname.includes(link.toLowerCase())
                    ? { color: "var(--emphasis)" }
                    : { color: "var(--link-hover-opp)" }
                }
                transition="color 0.2s ease-in-out"
              >
                {link}
              </Heading>
            </Link>
          ))}
        </Flex>
      </Portal>

      <Button
        alignItems="center"
        justifyContent="center"
        boxSize="40px"
        borderRadius="full"
        bgColor="transparent"
        color="var(--foreground)"
        _hover={{ color: "var(--link-hover)" }}
        _active={{ color: "var(--link-hover)" }}
        transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out opacity 0.3s ease-in-out"
        opacity={isMenuOpen ? 0 : 1}
        pointerEvents={isMenuOpen ? "none" : "auto"}
        onClick={() => setIsMenuOpen(true)}
      >
        <Icon boxSize="3rem">
          <IoIosMenu />
        </Icon>
      </Button>
    </>
  );
}
