import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { FaMapPin } from "react-icons/fa";
import Image from "next/image";
import * as db from "../data";

export default function Architecture() {
  const arch = db.arch;
  const gallerySpacing = "40px";
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
      >
        <Image
          src="/architecture/bpl-library/LibrarySiteEntranceRender.png"
          alt="Photoshopped Image of Architectural Model"
          fill
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
          priority
        />
      </Flex>

      {/* Spacer */}
      <Flex h="100vh" />

      <Box
        p={gallerySpacing}
        css={{
          columnCount: 3,
          columnGap: gallerySpacing,
        }}
      >
        {arch.map((project) => (
          <Box
            position="relative"
            overflow="hidden"
            _hover={{ "& .overlay": { opacity: 1 } }}
            key={project.link}
            mb={gallerySpacing}
            css={{ breakInside: "avoid" }}
          >
            <Image
              src={`/architecture/${project.image}`}
              alt={project.alt}
              width={900}
              height={900}
              style={{ width: "100%", height: "auto", display: "block" }}
            />

            {/* Dark overlay + title on hover */}
            <Box
              className="overlay"
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="blackAlpha.600"
              opacity={0}
              transition="opacity 0.3s ease"
              display="flex"
              alignItems="center"
              justifyContent="center"
              zIndex={1}
            >
              <Heading size="2xl" color="white">
                {project.title}
              </Heading>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
