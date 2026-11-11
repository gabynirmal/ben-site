import { Flex, Icon, FlexProps } from "@chakra-ui/react";
import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

export default function ContactLinks(props: FlexProps) {
  return (
    <Flex gap="4" {...props}>
      <Link href="resume.pdf" target="_blank" aria-label="Resume">
        <Flex
          alignItems="center"
          justifyContent="center"
          boxSize={{ base: "48px", md: "60px" }}
          borderRadius="full"
          bgColor="var(--link-hover)"
          color="var(--foreground)"
          _hover={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
          _active={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
          transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
        >
          <Icon boxSize={{ base: "1.5rem", md: "2rem" }}>
            <IoDocumentTextOutline />
          </Icon>
        </Flex>
      </Link>
      <Link href="mailto:smith.benj@northeastern.edu" aria-label="Email">
        <Flex
          alignItems="center"
          justifyContent="center"
          boxSize={{ base: "48px", md: "60px" }}
          borderRadius="full"
          bgColor="var(--link-hover)"
          color="var(--foreground)"
          _hover={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
          _active={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
          transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
        >
          <Icon boxSize={{ base: "1.5rem", md: "2rem" }}>
            <MdMailOutline />
          </Icon>
        </Flex>
      </Link>
      <Link
        href="https://www.linkedin.com/in/benjamin-smith125/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          boxSize={{ base: "48px", md: "60px" }}
          borderRadius="full"
          bgColor="var(--link-hover)"
          color="var(--foreground)"
          _hover={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
          _active={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
          transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
        >
          <Icon boxSize={{ base: "1.25rem", md: "1.5rem" }}>
            <FaLinkedinIn />
          </Icon>
        </Flex>
      </Link>
    </Flex>
  );
}
