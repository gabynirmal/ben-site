"use client";

import { Flex, Icon, Button, Heading, Box, Portal } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = ["ARCHITECTURE", "DESIGN", "ART", "ABOUT"];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <Portal>
        <Flex
          w="100%"
          h="100%"
          position="fixed"
          inset="0"
          px={{ base: "4", md: "30px" }}
          bgColor="rgba(29, 33, 40, 0.8)"
          backdropFilter="blur(5px)"
          direction="column"
          zIndex="max"
          opacity={isMenuOpen ? 1 : 0}
          pointerEvents={isMenuOpen ? "auto" : "none"}
          transition="opacity 0.3s ease-in-out"
        >
          <Flex alignItems="center" justifyContent="space-between" py="15px">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Heading
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="500"
                letterSpacing="wide"
                whiteSpace="nowrap"
                color={
                  pathname === "/" ? "var(--emphasis-opp)" : "var(--background)"
                }
                _hover={
                  pathname === "/"
                    ? { color: "var(--emphasis-opp)" }
                    : { color: "var(--link-hover-opp)" }
                }
                _active={
                  pathname === "/"
                    ? { color: "var(--emphasis-opp)" }
                    : { color: "var(--link-hover-opp)" }
                }
                transition="color 0.2s ease-in-out"
              >
                BENJAMIN SMITH
              </Heading>
            </Link>
            <Button
              alignItems="center"
              justifyContent="center"
              minW="44px"
              minH="44px"
              boxSize="44px"
              borderRadius="full"
              bgColor="transparent"
              color="var(--background)"
              _hover={{
                color: "var(--link-hover-opp)",
              }}
              _active={{
                color: "var(--link-hover-opp)",
              }}
              transition="color 0.2s ease-in-out, opacity 0.3s ease-in-out"
              opacity={isMenuOpen ? 1 : 0}
              pointerEvents={isMenuOpen ? "auto" : "none"}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <Icon boxSize="2rem">
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
          >
            {navigation.map((link: string) => (
              <Link
                href={`/${link.toLowerCase()}`}
                key={link}
                onClick={() => setIsMenuOpen(false)}
              >
                <Heading
                  size={{ base: "3xl", md: "4xl" }}
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
                  _active={
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
        minW="44px"
        minH="44px"
        boxSize="44px"
        borderRadius="full"
        bgColor="transparent"
        color="var(--foreground)"
        _hover={{ color: "var(--link-hover)" }}
        _active={{ color: "var(--link-hover)" }}
        transition="color 0.2s ease-in-out, opacity 0.3s ease-in-out"
        opacity={isMenuOpen ? 0 : 1}
        pointerEvents={isMenuOpen ? "none" : "auto"}
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <Icon boxSize="1.75rem">
          <IoIosMenu />
        </Icon>
      </Button>
    </>
  );
}
