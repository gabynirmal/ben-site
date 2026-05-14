"use client";

import { Flex, Heading, FlexProps, Box } from "@chakra-ui/react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

export default function Navigation(props: FlexProps) {
  const pathname = usePathname();
  const navigation = ["Architecture", "Design", "Personal", "About"];
  return (
    <Flex
      id="bs-navigation"
      py="15px"
      px={{ base: "4", md: "30px" }}
      justifyContent="space-between"
      alignItems="flex-end"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      zIndex="docked"
      {...props}
    >
      <Link href="/">
        <Heading
          size="3xl"
          color={pathname === "/" ? "var(--emphasis)" : "var(--foreground)"}
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
      <Flex gap="8" display={{ base: "none", md: "flex" }}>
        {navigation.map((link: string) => (
          <Link href={`/${link.toLowerCase()}`} key={link}>
            <Heading
              size="xl"
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
      <Box display={{ base: "block", md: "none" }}>
        <MobileNav />
      </Box>
    </Flex>
  );
}
