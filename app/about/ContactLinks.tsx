import { Flex, Icon, FlexProps } from "@chakra-ui/react";
import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";

export default function ContactLinks(props: FlexProps) {
  return (
    <Flex gap="4" {...props}>
      <Flex
        alignItems="center"
        justifyContent="center"
        boxSize="60px"
        borderRadius="full"
        bgColor="var(--link-hover)"
        _hover={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
        transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
      >
        <Link href="resume.pdf" target="_blank">
          <Icon boxSize="2rem">
            <IoDocumentTextOutline />
          </Icon>
        </Link>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        boxSize="60px"
        borderRadius="full"
        bgColor="var(--link-hover)"
        _hover={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
        transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
      >
        <Link href="mailto:smith.benj@northeastern.edu" target="_blank">
          <Icon boxSize="2rem">
            <MdMailOutline />
          </Icon>
        </Link>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        boxSize="60px"
        borderRadius="full"
        bgColor="var(--link-hover)"
        _hover={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
        transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
      >
        <Link
          href="https://www.linkedin.com/in/benjamin-smith125/"
          target="_blank"
        >
          <Icon boxSize="1.5rem">
            <FaLinkedinIn />
          </Icon>
        </Link>
      </Flex>
    </Flex>
  );
}
