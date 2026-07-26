"use client";

import { Flex, Icon, Button, Heading, Box, Portal } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = ["ARCHITECTURE", "DESIGN", "PERSONAL", "ABOUT"];
  return (
    <>
      <Portal>
        <Flex
          w="100%"
          h="100%"
          position="fixed"
          px={{ base: "4", md: "30px" }}
          bgColor="rgba(29, 33, 40, 0.8)"
          backdropFilter="blur(5px)"
          direction="column"
          zIndex="max"
          opacity={isMenuOpen ? 1 : 0}
          pointerEvents={isMenuOpen ? "auto" : "none"}
          transition="opacity 0.3s ease-in-out"
        >
          <Flex alignItems="end" justifyContent="space-between" py="15px">
            <Link href="/">
              <Heading
                size="3xl"
                fontWeight="500"
                letterSpacing="wide"
                whiteSpace="nowrap"
                color={
                  pathname === "/" ? "var(--emphasis-opp)" : "var(--background)"
                }
                _hover={
                  pathname === "/"
                    ? { color: "var(--emphasis-opp)" }
                    : { color: "var(--link-hover)" }
                }
                transition="color 0.2s ease-in-out"
              >
                BENJAMIN SMITH
              </Heading>
            </Link>
            <Button
              alignItems="center"
              justifyContent="center"
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
          </Flex>
          <Flex
            flex={1}
            justifyContent="center"
            alignItems="center"
            direction="column"
            gap="6"
            pb="15px"
            mt="-100px"
          >
            {navigation.map((link: string) => (
              <Link
                href={`/${link.toLowerCase()}`}
                key={link}
                onClick={() => setIsMenuOpen(false)}
              >
                <Heading
                  size="4xl"
                  fontWeight="500"
                  letterSpacing="wide"
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
