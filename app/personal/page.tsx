import { Flex, IconButton, Icon } from "@chakra-ui/react";
import Image from "next/image";
import * as db from "../data";
import Masonry from "@/components/ui/masonry/Masonry";
import { FaChevronDown } from "react-icons/fa6";

export default function Personal() {
  const personal = db.personal;

  return (
    <>
      {/* Header Image */}
      <Flex
        id="bs-home"
        position="absolute"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
        overflow="hidden"
      >
        <Image
          src="/personal/jerry/JerryGarciaTapestry.png"
          alt="Jerry Garcia Crocheted Tapestry"
          fill
          style={{
            objectFit: "cover",
            transform: "scale(1.5)",
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
          <a href="#bs-masonry">
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

      <Flex id="bs-masonry">
        <Masonry db={personal} folder="personal" />
      </Flex>
    </>
  );
}
