import { Flex, IconButton, Icon } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../data";
import Masonry from "@/components/ui/masonry/Masonry";
import { FaChevronDown } from "react-icons/fa6";

export default function Architecture() {
  const architecture = db.architecture;

  return (
    <>
      {/* Header Image */}
      <Flex
        id="bs-home"
        position="absolute"
        w="100vw"
        h="100vh"
        alignItems={"center"}
      >
        <Image
          src="/architecture/bpl-library/LibrarySiteEntranceRender.png"
          alt="Photoshopped Image of Architectural Model"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 20%",
          }}
          loading="eager"
        />

        {/* Down Arrow Button */}
        <Flex
          position="absolute"
          bottom="10px"
          w="100%"
          justifyContent="center"
          zIndex="dropdown"
        >
          <a href="#arch-masonry">
            <IconButton
              bg="transparent"
              color={"var(--foreground)"}
              _hover={{ color: "var(--link-hover)" }}
              aria-label="Scroll to projects"
            >
              <Icon boxSize="2rem">
                <FaChevronDown />
              </Icon>
            </IconButton>
          </a>
        </Flex>
      </Flex>

      {/* Spacer */}
      <Flex h="100vh" />

      <Flex id="arch-masonry">
        <Masonry db={architecture} folder="architecture" />
      </Flex>
    </>
  );
}
