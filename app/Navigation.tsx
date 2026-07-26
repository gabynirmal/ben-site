"use client";

import { Flex, Heading, FlexProps, Box } from "@chakra-ui/react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navigation(props: FlexProps) {
  const pathname = usePathname();
  const navigation = ["ARCHITECTURE", "DESIGN", "PERSONAL", "ABOUT"];

  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // scrolling down, past a small threshold near the top
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      id="bs-navigation"
      py="15px"
      px={{ base: "4", md: "30px" }}
      justifyContent="space-between"
      alignItems="flex-end"
      position="fixed"
      w="100%"
      zIndex="docked"
      bgColor="transparent"
      backdropFilter="blur(5px)"
      transform={hidden ? "translateY(-100%)" : "translateY(0)"}
      transition="transform 0.3s ease-in-out"
      {...props}
    >
      <Link href="/">
        <Heading
          size="3xl"
          fontWeight="500"
          letterSpacing="wide"
          whiteSpace="nowrap"
          color={pathname === "/" ? "var(--emphasis)" : "var(--foreground)"}
          _hover={
            pathname === "/"
              ? { color: "var(--emphasis)" }
              : { color: "var(--link-hover)" }
          }
          transition="color 0.2s ease-in-out"
        >
          BENJAMIN SMITH
        </Heading>
      </Link>
      <Flex gap="8" display={{ base: "none", lg: "flex" }}>
        {navigation.map((link: string) => (
          <Link href={`/${link.toLowerCase()}`} key={link}>
            <Heading
              size="xl"
              fontWeight="500"
              letterSpacing="wide"
              color={
                pathname.includes(link.toLowerCase())
                  ? "var(--emphasis)"
                  : "var(--foreground)"
              }
              _hover={
                pathname.includes(link.toLowerCase())
                  ? { color: "var(--emphasis)" }
                  : { color: "var(--link-hover)" }
              }
              transition="color 0.2s ease-in-out"
            >
              {link}
            </Heading>
          </Link>
        ))}
      </Flex>
      <Box display={{ base: "block", lg: "none" }}>
        <MobileNav />
      </Box>
    </Flex>
  );
}
